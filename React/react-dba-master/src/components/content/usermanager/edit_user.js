import React from "react";
import {Modal, Input, Form, message, Select, notification} from "antd";
import {withRouter} from 'react-router-dom';
import {inject,observer} from 'mobx-react';
import qs from "qs";


const Option = Select.Option;

const layout = {
	labelCol:{span:6},
	wrapperCol:{span:16}
}
  
@inject("UserNameStore","Store")
@withRouter
@observer
class EditUser extends React.Component{
	formRef=React.createRef();
	constructor(props) {
		super(props);
		this.props.UserNameStore.setState({
			loginusername:this.props.Store.username
		})
	}
	render(){
		const { visible } = this.props;

		const {
			modaltitle,
			modalInitialValues,
			depList,
			clickType,
			roleData,
			handleModal,
			loadUserData
			} = this.props.UserNameStore;
		return (
			<>

			<Modal
				onCancel={() => handleModal(false,"","")}
				onOk={() => {
					this.formRef.current.validateFields()
						.then(values=> {
							//console.log(values)
							const url=clickType==="add"?"http://localhost:8080/user/add":"http://localhost:8080/user/update";
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
									loadUserData('')
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

					<Form id="editUser"
					{...layout}  
					initialValues={modalInitialValues}
					ref={ this.formRef }
					preserve={false}
					>
					<Form.Item name='id'  hidden={true}>
						<Input />
					</Form.Item>
					<Form.Item name='createUser'  hidden={true}>
						<Input />
					</Form.Item>

                    <Form.Item label='登录账号' name='account' rules={[{required: true,message: '请输入登录账号!',}]} >
                        <Input placeholder="请输入登录账号"/>
                    </Form.Item>

					<Form.Item label='密码' name='passwords'  rules={[{required: true,message: '请输入密码!',}]} >
						<Input placeholder="请输入密码"/>
					</Form.Item>

					<Form.Item label='用户名' name='userName' rules={[{required: true,message: '请输入用户名!',}]} >
						<Input placeholder="请输入用户名"/>
					</Form.Item>

					{/*启用状态，下拉框*/}
                    <Form.Item label='性别' name='sex' rules={[{required:true,message:'请选择性别'}]}>
						 <Select placeholder="请选择性别">
							<Select.Option value="1">男</Select.Option>
							<Select.Option value="2">女</Select.Option>
							<Select.Option value="0">未知</Select.Option>
						 </Select>
                    </Form.Item>

					{/*所属部门名称，下拉框*/}
                    <Form.Item label='所属部门名称' name='deptID' rules={[{required:true,message:'请选择所属部门名称'}]} >
						<Select placeholder="请选择所属部门名称" >
							{
								depList.map(item => (
									<Select.Option key={item.depID} value={item.depID}>{item.depName}</Select.Option>
								))
							}

						</Select>
                    </Form.Item>

					{/*是否可用，下拉框*/}
					<Form.Item label='是否可用' name='enabled' rules={[{required:true,message:'请选择可用状态'}]} >
						<Select placeholder="请选择可用状态" >
							<Select.Option value="1">可用</Select.Option>
							<Select.Option value="2">不可用</Select.Option>

						</Select>
					</Form.Item>

					{/*账号是否锁定，下拉框*/}
					<Form.Item label='账号是否锁定' name='locked' rules={[{required:true,message:'请选择锁定状态'}]} >
						<Select placeholder="请选择锁定状态" >
							<Select.Option value="1">未锁定</Select.Option>
							<Select.Option value="2">锁定</Select.Option>

						</Select>
					</Form.Item>

					{/*人员类型，下拉框*/}
					<Form.Item label='人员类型' name='roleType' rules={[{required:true,message:'请选择人员类型'}]} >
						<Select placeholder="请选择人员类型" >
							{
								roleData.map(item => (
									<Select.Option key={item.id} value={item.id}>{item.roleName}</Select.Option>
								))
							}

						</Select>
					</Form.Item>
					{/*职务*/}
					<Form.Item label='职务' name='zw'>
					   <Input placeholder="请输入职务" />
					</Form.Item>

					{/*电话*/}
					<Form.Item label='电话' name='phone'>
					   <Input placeholder="请输入电话" />
					</Form.Item>
                </Form>
            </Modal>
			</>
		)
	}
}

export default EditUser