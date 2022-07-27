import React from 'react';
import { Layout } from 'antd';
import IndexMenuLeft from './index_menu_left';
import IndexHerder from './index_header';
import IndexContent from './index_content';
import {withRouter} from 'react-router-dom';
import {inject,observer} from 'mobx-react';


const { Header, Content, Footer, Sider } = Layout;

const siderSty={
	overflow: 'auto',
	height: '100vh',
	position: 'fixed',
	left: 0,
}
const bcg={
	...siderSty,
	background: 'white',
}
@inject('Store')
@withRouter
@observer
class FrameIndex extends React.Component{
	constructor(props) {
		super(props);
	    //console.log(props);
	}
	render(){
		const {theme} = this.props.Store;
		return(
			<Layout>
				<Sider style={theme==='light'?bcg:siderSty} >
					<IndexMenuLeft />
				</Sider>
				<Layout className="site-layout" style={{marginLeft:200}}>
					<Header className="site-layout-background" style={{ padding: 0, }}>
						<IndexHerder />
					</Header>
					<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
						<IndexContent />
					</Content>
					<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
				</Layout>
		</Layout>
		)
	}
}
export default FrameIndex