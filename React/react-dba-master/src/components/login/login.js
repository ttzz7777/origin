import React from "react";
import LoadableComponent from '../LoadableComponent/LoadableComponent'
import {withRouter} from "react-router-dom"
import 'antd/dist/antd.css';
import '../../css/index.css'
import '../../css/main.css'
import loginLogo from '../../images/login_logo.png'
import loginMain from '../../images/login_main_ad.png'

const LoginForm = LoadableComponent(import('./LoginForm'))


@withRouter
class Login extends React.Component {

    render() {
        return (
            <div className="bodybg">
                <div className="login-all">
                    <div className="login-tit">
                        <img src={loginLogo} alt="图片信息"/>
                    </div>
                    <div className="login-content">
                        <div className="login-content-left">
                            <img src={loginMain} alt="图片信息"/>
                        </div>
                        <div className="login-content-right">
                            <div className="login-form">
                                <div className="login-top">
                                    <h3>系统登录</h3>
                                </div>
                                <div className="login-center">
                                    <LoginForm/>
                                    <div className="form-com">版权所有 © 大数据智能分析系统</div>
                                </div>
                                <div className="login-bot">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }

}

export default Login