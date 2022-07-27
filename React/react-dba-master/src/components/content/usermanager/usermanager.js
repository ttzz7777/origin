import React from "react";
import {Table, Button, Tree, Modal} from 'antd';
import 'antd/dist/antd.css';
import { DownloadOutlined,ExclamationCircleOutlined } from '@ant-design/icons';
import {withRouter} from 'react-router-dom';
import {inject,observer} from 'mobx-react';
import "../../../css/layout.css"
import EditUser from "../usermanager/edit_user";

const { confirm } = Modal;


@inject('UserNameStore','Store')
@withRouter
@observer
class Tables extends React.Component{
    constructor(props) {
        super(props)
        this.props.UserNameStore.activeKey = props.Store.activeKey
        this.props.UserNameStore.loadDepData()
        this.props.UserNameStore.loadUserData('')
    }

    render(){
        const {
            selectedRowKeys,
            usernameData,
            usernamecolumns,
            usernameTree,
            organVisible,
            loadUserData,
            handleModal,
            onSelectChange
        } = this.props.UserNameStore;

        const rowSelection = {
            selectedRowKeys,
            onChange: onSelectChange,
        };
        return (
            <div>
                <div style={{width:"15%",height: "31rem",borderRight: "1px solid #DCDCDC",float:"left"}}>
                    <Tree treeData={usernameTree} onSelect={(selectKey,e) => loadUserData(e)}/>
                </div>
                <div style={{width:"85%",float:"left"}}>
                    <div style={{margin:'20px 0px',float:'right'}}>
                        <Button type="primary" onClick={() => handleModal(true,"新增用户","add")} name="add" style={{margin:'0 10px',zIndex:'99'}} name="add" style={{margin:'0 10px',zIndex:'99'}}>新增</Button>
                        <Button type="primary" onClick={() => alert(2)} name="update" style={{margin:'0 10px',zIndex:'99'}}>修改</Button>
                        <Button type="primary" onClick={() => alert(3)} name="del" style={{margin:'0 10px',zIndex:'99'}}>删除</Button>
                        {/*<Button type="primary" name="export" icon={<DownloadOutlined /> }>导出</Button>
						<Button type="primary" name="import" style={{margin:'0 10px',zIndex:'99'}}>导入</Button>*/}
                    </div>
                    <Table rowSelection={rowSelection} columns={usernamecolumns} dataSource={usernameData} pagination={{hideOnSinglePage:true,pageSize:5}}
                           rowClassName='light-row' />
                    <EditUser visible={organVisible} />
                </div>
            </div>
        )
    }
}

export default Tables
