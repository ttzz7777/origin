import React from 'react';
import {Menu, message} from 'antd';
import {NavLink, withRouter} from 'react-router-dom';
import {inject,observer} from 'mobx-react';
import {
  AppstoreOutlined,
	
} from '@ant-design/icons';
import '../../css/layout.css';
import qs from "qs";

const { SubMenu } = Menu;

@inject('Store')
@withRouter
@observer
export default class IndexMenuLeft extends React.Component{
	constructor(props) {
	    super(props)

	}
	componentDidMount() {
		this.props.Store.getSessionStorage()
	}

	render(){
		const {theme,handleAddTags,menus} = this.props.Store;
		return (
			<div>
					<div className="logo">智能分析系统后台界面</div>
					
					<Menu theme={theme} mode="inline" defaultSelectedKeys={['1']} onClick={handleAddTags} >
						{(menus || []).map((item) => {
								if(item.hasOwnProperty("children")){
									if(item.children.length>0){
										return (
											<SubMenu key={item.menuId} icon={<AppstoreOutlined />} title={item.menuName}>
													{item.children.map((itemchild)=>{
														return (
															<Menu.Item key={itemchild.menuId} menuname={itemchild.menuName} >{itemchild.menuName}</Menu.Item>
														)
													})}
											 </SubMenu>
										)
									}
								}else {
									return (
									   <Menu.Item key={item.menuId} menuname={item.menuName} icon={<AppstoreOutlined />}>{item.menuName}</Menu.Item>
									)
								}

						})}
					
					</Menu>
					
			</div>
		)
	}
	
}
