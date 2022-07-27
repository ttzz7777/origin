import React from 'react';
import { observable,computed,action} from 'mobx';
import { tabs } from "../components/Index/RouteMap";

class Store {
	 @observable isLogin = false //判断用户是否登录的状态
	 @observable username = "" //当前登录用户
	 @observable collapsed = false;
	 @observable theme = 'dark'; //主题
	 @observable panes = [];//tab标签数组
	 @observable activeKey = '';//tab标签页的显示key
	 @observable passwordVisible = false; //控制修改密码的模态框
	 @observable menus = [];//菜单数组

	/**
	 * 参数初始化
	 */
	@action initParame= () =>{
		this.isLogin=false;
		this.username="";
		this.collapsed=false;
		this.theme = 'dark';
		this.panes = [];
		this.activeKey = '';
		this.passwordVisible = false;
		this.menus = [];

	}
	@action handleLoginStatus = (value,username)=>{
		this.isLogin=value;
		this.username=username
	}

	 /**
	 * 隐藏/显示修改密码模态框
	 */
	 @action togglePasswordVisible = (visible)=>{

		 this.passwordVisible = visible;
	 }

	 //设置到session中
	@action setSessionStorage = () => {
		sessionStorage.setItem("menus",JSON.stringify(this.menus))

	}
	//获取session
	@action getSessionStorage = () => {
		// eslint-disable-next-line no-unused-expressions
		(this.menus.length <= 0) ? this.menus = JSON.parse(sessionStorage.getItem("menus")):this.menus
	}

	 @action setMenus = (value) =>{
	 	this.menus=value
		 this.setSessionStorage()
	 }
	/**
	 * 点击菜单添加一个空白tab页
	 * 
	 */
	 @action handleAddTags=(value)=>{
		 //console.log(value);
		let len = this.panes.length;
		if(len > 0){//点击菜单在content显示tab标签，
			let flag=false;
			for(let i=0;i<len;i++){
				if(this.panes[i].key == value.key){
					flag=true; 
					break;			
				}
			}
			if(!flag){

				this.panes.push({ title: value.item.props.menuname, content: tabs[value.key], key: value.key })
				
			}
			
		}else{

			this.panes.push({ title: value.item.props.menuname, content: tabs[value.key], key: value.key })
		}
		this.activeKey=value.key;			
	 };
	 
	 @action handleDelete =(activeKey) =>{
		  this.panes = this.panes.filter(pane => pane.key !== activeKey);
			if(this.panes.length>0){
				this.activeKey=this.panes[this.panes.length-1].key;
			}
			
	 }
	 @action handleTheme=(value)=>{ //主题切换
		 this.theme = value ? 'dark' : 'light';
		 
	 }
	  @action handleChange=(activeKey)=>{ //切换tab标签
	 		this.activeKey=activeKey;
	 		 
	 }
}

export default new Store();