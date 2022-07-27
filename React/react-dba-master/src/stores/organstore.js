import React from 'react';
import { observable,computed,action} from 'mobx';
import { CarryOutOutlined  } from '@ant-design/icons';


class OrganStore {

	 @observable activeKey='';//store中用于存储显示的是哪个key
	 @observable organVisible = false; //控制单位管理的模态框
	 @observable selectedRowKeys=[];//选择的行的key值
	 @observable selectedlen=0;//选择了多少行,其实这个变量可以不需要定义，但已经写了就暂时用吧
	 @observable organdata=[];//单位管理表格数据
	 @observable modaltitle='';//模态框的标题
	@observable clickType='';//点击操作的类型，add还是update
	@observable modalInitialValues='';//initialValues值

	 @observable organcolumns=[{ 
								title: '部门编号',
								dataIndex: 'depID',
								key:'depID'},
								{ 
								title: '部门名称',
								dataIndex: 'depName',
								key:'depName'},
								{ 
								title: '启用状态',
								dataIndex: 'stateName',
								key:'stateName'},
								{ 
								title: '单位级别',
								dataIndex: 'depLevelName',
								key:'depLevelName'},
								{ 
								title: '上级部门名称',
								dataIndex: 'superDepName',
								key:'superDepName'},
								{ 
								title: '联系人',
								dataIndex: 'lxr',
								key:'lxr'},
								{ 
								title: '联系电话',
								dataIndex: 'phone',
								key:'phone'},
								{ 
								title: '地址',
								dataIndex: 'address',
								key:'address'}];//单位管理表格的表头
	 @observable organTree=[];//单位管理的单位树

	 
	
	@action setState=(newstate)=>{
		for(let i in newstate){
			if(this.hasOwnProperty(i)){
				this[i]=newstate[i];
			}
		}
		this.reValue()
	}


	@action loadData = () =>{
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
				let organdata=[];
				let organTree=[];
				for(let i=0;i<data.length;i++){
					organdata.push({key:data[i].depID,depID:data[i].depID,
						depName:data[i].depName,stateName:data[i].state===0?'未启用':'启用',
						depLevelName:data[i].depLevel===1?'一级':'二级',
						superDepName:data[i].superDepName,lxr:data[i].lxr,phone:data[i].phone,
						address:data[i].address,superDepID:data[i].superDepID,state:data[i].state,depLevel:data[i].depLevel});
					if(data[i].superDepID === 'ROOT'){
						organTree.push({title:data[i].depName,key:data[i].depID,icon: <CarryOutOutlined />,children:[]});
					}
				}

				for(let i=0;i<organTree.length;i++){
					for(let j=0;j<data.length;j++){
						if(organTree[i].key === data[j].superDepID){
							organTree[i].children.push({title:data[j].depName,key:data[j].depID,icon: <CarryOutOutlined />});
						}
					}
				}
				this.setState({
					organdata:organdata,
					organTree:organTree
				})
			}).catch(error => {
			console.log(error)
		})
	}
	 /**
	* 隐藏/显示新增和修改角色模态框
	*/

	 @action handleModal = (visible,title,type) =>{
		 this.organVisible=visible;
		 this.modaltitle=title;
		 this.clickType=type;
		 if(type === 'add'){
			 this.modalInitialValues={
			 	 depID:'',
				 depName:'',
				 state:'0',
				 depLevel:'1',
				 superDepID:'ROOT',
				 lxr:'',
				 phone:'',
				 address:''}

		 }else if(type === 'update'){
				let tempData =[];
				 for (let i = 0;i < this.organdata.length;i++){
					 if(this.selectedRowKeys[0] === this.organdata[i].key){
						 tempData=this.organdata[i]
					 }
				 }
			//console.log(tempData)
			 this.modalInitialValues={
				 depID:tempData.depID,
				 depName:tempData.depName,
				 state:tempData.state.toString(),
				 depLevel:tempData.depLevel.toString(),
				 superDepID:tempData.superDepID,
				 lxr:tempData.lxr,
				 phone:tempData.phone,
				 address:tempData.address}

		 }else{
			 this.modalInitialValues={}
		 }
	 }
	//删除操作数据，没有请求后台，直接处理表格数据
	 @action handleData = ()=>{
		 let tempdata = [...this.organdata]
		 let tempTree = [...this.organTree]
		 for(let i=this.selectedRowKeys.length-1;i>=0;i--){
			 for (let j = 0;j < tempdata.length;j++){
				 if(this.selectedRowKeys[i] === tempdata[j].key){
					 tempdata.splice(j,1)
				 }
			 }

		 }

		 for(let i=this.selectedRowKeys.length-1;i>=0;i--){
			 for (let k = 0;k < tempTree.length;k++){
				 if(this.selectedRowKeys[i] === tempTree[k].key){

					 tempTree.splice(k,1)
				 }else if(tempTree[k].children.length>0){
				 	for(let j=0;j<tempTree[k].children.length;j++){

						if(tempTree[k].children[j].key === this.selectedRowKeys[i]){
							tempTree[k].children.splice(j,1)
						}

					}

				 }else{
					//
				 }
			 }

		 }



		this.organdata=tempdata
		 this.organTree=tempTree
		 this.reValue()
	 }
	//将存储被选中的值的变量置空
	 @action reValue=() => {
		 this.selectedRowKeys=[]
		 this.selectedlen=0
	 }
	
	@action onSelectChange= (selectedRowKeys) =>{
		this.selectedRowKeys = selectedRowKeys
		this.selectedlen= this.selectedRowKeys.length;
	}
}
export default new OrganStore();