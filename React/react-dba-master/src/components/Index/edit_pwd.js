import React from "react";
import {Modal, Input, Form, message} from "antd";
import {withRouter} from 'react-router-dom';
import {inject,observer} from 'mobx-react';
import '../../css/layout.css';



@inject("Store")
@withRouter
@observer
class EditPasswordModal extends React.Component{
	
	handleCancel = () => {
        this.props.Store.togglePasswordVisible(false)
    }
	/**
     * 模态框的确定按钮
     */
    handleOk = () => {
        
    }
	/**
     * 提交修改密码
     */
    onSubmit = async (values) => {
        //加密密码
       
    }
	
	render(){
		const { visible } = this.props
		
		const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        }
		return (
			<Modal
                onCancel={this.handleCancel}
                onOk={this.handleOk}
                visible={visible}
                centered
                title="修改密码">
                <Form id="editPwdId">
                    <Form.Item label={'用户名'} {...formItemLayout}>
                        <Input placeholder="请输入用户名" />
                    </Form.Item>
                    <Form.Item label={'旧密码'} {...formItemLayout}>
                        <Input placeholder="请输入旧密码" autoComplete="new-password" type={'password'} />
                    </Form.Item>
                    <Form.Item label={'新密码'} {...formItemLayout}>
                        <Input placeholder="请输入新密码" autoComplete="new-password" type={'password'} />
                    </Form.Item>
                    <Form.Item label={'确认密码'} {...formItemLayout}>
                       <Input placeholder="请再次输入新密码" autoComplete="new-password" type={'password'} />
                    </Form.Item>
                </Form>
            </Modal>
		)
	}
}

export default EditPasswordModal