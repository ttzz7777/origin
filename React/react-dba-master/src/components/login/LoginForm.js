import React from "react";
import {Button, Form, Input,message} from "antd";
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import qs from "qs";
import {withRouter} from "react-router-dom"
import {inject, observer} from "mobx-react";
import '../../css/index.css';
import '../../css/main.css';



const layout = {
    wrapperCol: { offset:2,span: 20 },
};


const userprefix = (
    <UserOutlined
        style={{
            fontSize: 18,
            color: "#fff",
        }}
    />
);

const passprefix = (
    <LockOutlined
        style={{
            fontSize: 18,
            color: "#fff",
        }}
    />
);

@inject('Store')
@withRouter
@observer
class LoginForm extends React.Component{

    handleFinish = (e) => {
        //console.log(this.props);
        //console.log(e);
        fetch('http://localhost:8080/login',{
            method:'POST',
            mode:'cors',
            withCredentials: true,
            headers: {
                'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8"'
            },
            body:qs.stringify({
                username:e.username,
                password:e.password
            })
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                //操作成功判断
                //console.log(data)

                if(data.hasOwnProperty("menuList")&&data.hasOwnProperty("username")){
                    if(data.result.operaCode === 200 && data.result.success === true){
                        this.props.Store.handleLoginStatus(true,data.username);
                        this.props.Store.setMenus(data.menuList);
                    }else{
                        message.info(data.result.message);
                    }
                }else {
                    message.info(data.message);
                }

            }).catch(error => {
            console.log(error)
        })

    }


    render() {
        return (
            <Form onFinish={this.handleFinish} {...layout}>
                <Form.Item labelAlign="right" name="username" rules={[{required: true,message: '请输入用户名!'}]}>
                        <Input prefix={userprefix} placeholder="请输入用户名" />
                </Form.Item>

                <Form.Item labelAlign="right" name="password" rules={[{required: true,message: '请输入密码!'}]}>
                        <Input.Password prefix={passprefix}  placeholder="请输入密码" />
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit">登录</Button>
                </Form.Item>

            </Form>
        )
    }
}
export default LoginForm