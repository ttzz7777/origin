import React from "react";
import {Modal, Input, Form, message, Select, notification} from "antd";
import {withRouter} from 'react-router-dom';
import {inject,observer} from 'mobx-react';
import axios from "axios";
import qs from "qs";


const Option = Select.Option;

const layout = {
	labelCol:{span:6},
	wrapperCol:{span:16}
}
  
@inject("OrganStore")
@withRouter
@observer
class EditOrganized extends React.Component{
	formRef=React.createRef();

	render(){
		const { visible } = this.props;

		const {
			modaltitle,
			modalInitialValues,
			clickType,
			organdata,
			handleModal,
			loadData,
			} = this.props.OrganStore;
		return (
			<>

			<Modal
				onCancel={() => handleModal(false,"","")}
				onOk={() => {
					this.formRef.current.validateFields()
						.then(values=> {
							//console.log(values)
							const url=clickType==="add"?"http://localhost:8080/add":"http://localhost:8080/update";
							fetch(url,{
								method:'POST',
								mode:'cors',
								withCredentials: true,
								headers: {
									'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8"'
								},
								body:qs.stringify({
									values
								})
							})
								.then(response => {
									return response.json();
								})
								.then(data => {
									notification.success({
										message:'操作成功',
										description:'描述信息',
										duration:3
									})
									loadData()
									handleModal(false,"","");
								}).catch(error => {
								notification.error({
									message:'操作失败',
									description:'描述信息',
									duration:2
								})
							})

						})
				}}
                visible={visible}
                centered
				okText="确定"
				cancelText="取消"
                title={modaltitle}
				destroyOnClose={true}>

					<Form id="editPwdId" 
					{...layout}  
					initialValues={modalInitialValues}
					ref={ this.formRef }
					preserve={false}
					>
					<Form.Item name='depID'  hidden={true}>
						<Input />
					</Form.Item>

                    <Form.Item label='部门名称' name='depName' rules={[{required: true,message: '请输入部门名称!',}]} >
                        <Input placeholder="请输入部门名称"/>
                    </Form.Item>
					
					{/*启用状态，下拉框*/}
                    <Form.Item label='启用状态' name='state' rules={[{required:true,message:'请选择启用状态'}]}>
						 <Select placeholder="请选择启用状态">
							<Select.Option value="0">不启用</Select.Option>
							<Select.Option value="1">启用</Select.Option>
						 </Select>
                    </Form.Item>

					{/*单位级别，下拉框*/}
                    <Form.Item label='单位级别' name='depLevel' rules={[{required:true,message:'请选择单位级别'}]} >
						 <Select placeholder="请选择单位级别">

							<Select.Option value="1">一级</Select.Option>
							<Select.Option value="2">二级</Select.Option>
						</Select>
                    </Form.Item>
					{/*上级部门名称，下拉框*/}
                    <Form.Item label='上级部门' name='superDepID' rules={[{required:true,message:'请选择上级部门'}]} >
						<Select placeholder="请选择上级部门" >
							{
								organdata.map(item => (
									<Select.Option key={item.depID} value={item.depID}>{item.depName}</Select.Option>
								))
							}


						</Select>
                    </Form.Item>
					
					{/*联系人*/}
					<Form.Item label='联系人' name='lxr'>
					   <Input placeholder="请输入联系人" />
					</Form.Item>
					{/*联系电话*/}
				
					<Form.Item label='联系电话' name='phone' validateFirst='true' rules={[
						{pattern:/^1[356789]\d{9}$/,message:'电话号码格式有误，请重新输入!'}]} >
					   <Input placeholder="请输入联系电话" />
					</Form.Item>
					{/*地址*/}
					
					<Form.Item label='地址' name='address'>
					   <Input placeholder="请输入地址" />
					</Form.Item>
                </Form>
            </Modal>
			</>
		)
	}
}

export default EditOrganized