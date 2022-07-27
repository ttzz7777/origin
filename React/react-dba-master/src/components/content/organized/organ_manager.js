import React from "react";
import {Table, Tag, Space, Button, Tree, message, Modal, notification} from 'antd';
import 'antd/dist/antd.css';
import { DownloadOutlined,ExclamationCircleOutlined } from '@ant-design/icons';
import EditOrganized from './edit_organ';
import {withRouter} from 'react-router-dom';
import {inject,observer} from 'mobx-react';
import "../../../css/layout.css"

const { confirm } = Modal;


@inject('OrganStore','Store')
@withRouter
@observer
class Tables extends React.Component{
	constructor(props) {
	    super(props)
		this.props.OrganStore.activeKey = props.Store.activeKey
		this.props.OrganStore.loadData()
	}

	render(){
		const { 
		selectedRowKeys,
		selectedlen,
		organVisible,
		organdata,
		organcolumns,
		organTree,
		handleModal,
		onSelectChange,
		handleData,
		} = this.props.OrganStore;
		const rowSelection = {
		  selectedRowKeys,
			onChange: onSelectChange,
		};
		return (
			<div>
				<div style={{width:"15%",height: "31rem",borderRight: "1px solid #DCDCDC",float:"left"}}>
					<Tree treeData={organTree} />
				</div>
				<div style={{width:"85%",float:"left"}}>
					<div style={{margin:'20px 0px',float:'right'}}>
						<Button type="primary" onClick={() => handleModal(true,"新增组织角色","add")} name="add" style={{margin:'0 10px',zIndex:'99'}}>新增</Button>
						<Button type="primary" onClick={() => {
							if(selectedlen > 0){
								if(selectedlen === 1){
									handleModal(true,"修改组织角色","update")

								}else{
									message.info("一次只能修改一条记录,请重新选择")
								}

							}else{
								message.info("请勾选需要修改的记录")
							}
						}} name="update" style={{margin:'0 10px',zIndex:'99'}}>修改</Button>
						<Button type="primary" onClick={() => {
							return selectedlen>0?confirm({
								title:"你确定要删除所选记录吗？",
								icon: <ExclamationCircleOutlined />,
								content:"这里可以做一些描述",
								okText:'确定',
								cancelText:'取消',
								onOk:()=>{
									//根据selectedRowKeys数组中的主键key删除data数组中记录
									fetch("http://localhost:8080/delete?keys="+selectedRowKeys,{
										method:'DELETE',
										mode:'cors',
										withCredentials: true,
										headers: {
											'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8"'
										}
									})
										.then(response => {
											return response.json();
										})
										.then(data => {
											handleData()
										}).catch(error => {
											console.log(error)
										})
								}
							}):message.info("请选择需要删除的记录")

						}} name="del" style={{margin:'0 10px',zIndex:'99'}}>删除</Button>
						{/*<Button type="primary" name="export" icon={<DownloadOutlined /> }>导出</Button>
						<Button type="primary" name="import" style={{margin:'0 10px',zIndex:'99'}}>导入</Button>*/}
					</div>
					<Table rowSelection={rowSelection} columns={organcolumns} dataSource={organdata} pagination={{hideOnSinglePage:true,pageSize:5}}
						   rowClassName='light-row' />
					<EditOrganized visible={organVisible} />
				</div>				
			</div>
		)
	}
}

export default Tables
