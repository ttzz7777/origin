import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {inject,observer} from 'mobx-react';
import {Avatar,Menu, Dropdown, message,Switch} from 'antd';
import { DownOutlined,EditOutlined,LogoutOutlined  } from '@ant-design/icons';
import Store from '../../stores/store';
import EditPasswordModal from "./edit_pwd";
import '../../css/layout.css';

@inject('Store')
@withRouter
@observer
export default class IndexHeader extends React.Component{
	constructor(props) {
	    super(props)
		
	}

	onClick = ({ key }) => {
		fetch("http://localhost:8080/logout",{
			method:'POST',
			mode:'cors',
			withCredentials: true
		}).then(response => {
			return response.json()
		}).then(data => {
			//console.log(data)
			if(data.operaCode === 200 && data.success === true){
				this.props.Store.initParame();
				this.props.history.push("/")
			}else{
				message.info(data.message);
			}
		}).catch(error => {
			console.log(error)
		})
	};

	menu = (value) => (
		<Menu>
			<Menu.Item onClick={()=>this.props.Store.togglePasswordVisible(true)} > <EditOutlined />修改密码</Menu.Item>
			<Menu.Item  onClick={this.onClick} key="2"><LogoutOutlined />退出登录</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="3">
				主题 : <Switch
				checked={value === 'dark'}
				onChange={this.props.Store.handleTheme}
				checkedChildren="Dark"
				unCheckedChildren="Light"
			/>
			</Menu.Item>
		</Menu>
	);
	 render(){
		const { passwordVisible,username } = this.props.Store
		
		 return (
			<div>			
				<div style={{float:'right',marginRight:40}}>
					<Dropdown overlay={this.menu(this.props.Store.theme)}>
						<a className="ant-dropdown-link"  onClick={e => e.preventDefault()}>
						 <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
						 {username} <DownOutlined />
						</a>
					</Dropdown>					
					
				</div>
				<EditPasswordModal visible={passwordVisible} />
			</div>				
		 )
	 }
}
