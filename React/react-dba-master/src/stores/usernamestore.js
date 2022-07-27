import React from 'react';
import { observable,computed,action} from 'mobx';
import { CarryOutOutlined  } from '@ant-design/icons';


class UserNameStore {

	 @observable activeKey='';
	 @observable usernameData=[];//用户管理表格数据
	 @observable organVisible = false; //控制用户管理的模态框
	 @observable modaltitle='';//模态框的标题
	 @observable clickType='';//点击操作的类型，add还是update
	 @observable modalInitialValues='';//initialValues值
	 @observable depID=''; //存储树形菜单的部门id
	 @observable selectedRowKeys=[];//选择的行的key值
	 @observable selectedlen=0;
	 @observable roleData=[];
	 @observable usernamecolumns=[{
								title: '用户编号',
								dataIndex: 'userID',
								key:'userID'},
								 {
									 title: '登录账号',
									 dataIndex: 'account',
									 key:'account'},
								 {
									 title: '登录密码',
									 dataIndex: 'passwords',
									 key:'passwords'},
								{ 
								title: '用户名',
								dataIndex: 'userName',
								key:'userName'},
								 {
									 title: '性别',
									 dataIndex: 'sex',
									 key:'sex'},

								{ 
								title: '所属部门名称',
								dataIndex: 'deptID',
								key:'deptID'},
								{ 
								title: '账号是否可用',
								dataIndex: 'enabled',
								key:'enabled'},
								{ 
								title: '账号是否锁定',
								dataIndex: 'locked',
								key:'locked'},
								 {
								 title: '人员类型',
								 dataIndex: 'roleType',
								 key:'roleType'},
								 {
								 title: '职务',
								 dataIndex: 'zw',
								 key:'zw'},
								 {
								 title: '电话',
								 dataIndex: 'phone',
								 key:'phone'}];//用户管理表格的表头
	 @observable usernameTree=[];//单位管理的单位树
	 @observable depList=[];//单位管理集合
	 @observable loginusername='';//登录的用户名



	@action setState=(newstate)=>{
		for(let i in newstate){
			if(this.hasOwnProperty(i)){
				this[i]=newstate[i];
			}
		}
		this.reValue()
	}
	//将存储被选中的值的变量置空
	@action reValue=() => {
		this.selectedRowKeys=[]
		this.selectedlen=0
	}
	@action loadDepData = () =>{
		fetch('http://localhost:8080/loadTabContentByKey?key='+this.activeKey,{
			method:'GET',
			mode:'cors',
			withCredentials: true
		})
			.then(response => {
				return response.json();
			})
			.then(data => {
				//console.log(data)
				let usernameTree=[];
				for(let i=0;i<data.length;i++){
					if(data[i].superDepID === 'ROOT'){
						usernameTree.push({title:data[i].depName,key:data[i].depID,icon: <CarryOutOutlined />,children:[]});
					}
				}
				for(let i=0;i<usernameTree.length;i++){
					for(let j=0;j<data.length;j++){
						if(usernameTree[i].key === data[j].superDepID){
							usernameTree[i].children.push({title:data[j].depName,key:data[j].depID,icon: <CarryOutOutlined />});
						}
					}
				}
				this.setState({
					depList:data
				})
				this.setState({
					usernameTree:usernameTree
				})
			}).catch(error => {
			console.log(error)
		})
	}
	@action loadUserData = (e) =>{
		let selectedkey='';
		if(e !== ''){
			selectedkey=e.node.key;
		}
		let url='http://localhost:8080/user/loadUserData?depID='+selectedkey;
		//根据部门id查询用户信息
		fetch(url,{
			method:'GET',
			mode:'cors',
			withCredentials: true
		})
			.then(response => {
				return response.json();
			})
			.then(data => {
				//console.log(data)
				let usernameData=[];
				for(let i=0;i<data.length;i++){
					usernameData.push({key:data[i].id,userID:data[i].id,
						account:data[i].account,passwords:data[i].password222,
						userName:data[i].userName,sex:data[i].sex=='1'?'男':'女',
						deptID:data[i].depName,enabled:data[i].enabled?'可用':'不可用',
						locked:data[i].accountNotLocked?'未锁定':'锁定',roleType:data[i].roleName,
						zw:data[i].zw,phone:data[i].dh})
				}
				this.setState({
					usernameData:usernameData
				})
			}).catch(error => {
			console.log(error)
		})
	}


	/**
	 * 隐藏/显示新增和修改用户模态框
	 */

	@action handleModal = (visible,title,type) =>{
		this.organVisible=visible;
		this.modaltitle=title;
		this.clickType=type;
		let url='http://localhost:8080/user/loadRoleData';
		//查询用户类型
		fetch(url,{
			method:'GET',
			mode:'cors',
			withCredentials: true
		})
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({
					roleData:data
				})
			}).catch(error => {
				console.log(error)
			})
		if(type === 'add'){
			this.modalInitialValues={
				id:'',
				createUser:this.loginusername,
				account:'',
				passwords:'',
				userName:'',
				sex:'',
				deptID:'',
				enabled:'1',
				locked:'1',
				roleType:'',
				zw:'',
				phone:''}
		}else if(type === 'update'){

		}else{
			this.modalInitialValues={}
		}

	}

	@action onSelectChange= (selectedRowKeys) =>{
		this.selectedRowKeys = selectedRowKeys
		this.selectedlen= this.selectedRowKeys.length;
	}

}

export default new UserNameStore();