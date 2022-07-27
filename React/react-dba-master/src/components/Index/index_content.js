import React from 'react';
import { withRouter } from 'react-router-dom';
import {inject,observer} from 'mobx-react';
import { Tabs } from 'antd';
import Store from '../../stores/store'

import '../../css/layout.css';

const { TabPane } = Tabs;


@inject('Store')
@withRouter
@observer
export default class IndexContent extends React.Component{
	 constructor(props) {
		super(props);
		this.newTabIndex = 0;
		
	 }
	 
	  onEdit = (targetKey, action) => {
		this[action](targetKey);
	  };
	  
	 remove = targetKey => {
		
		Store.handleDelete(targetKey)
		
	  };
	
	 render(){
		const { panes , activeKey , handleChange}=this.props.Store
		 return (
			<div className="site-layout-background" style={{ padding: 24,height: '100%' }}>
				 <div>
					<Tabs hideAdd onChange={handleChange}  activeKey={activeKey} onEdit={this.onEdit} type="editable-card"  >
					 {panes.map(item => (
						<TabPane tab={item.title} key={item.key}>
							{item.content}
						</TabPane>
					 ))}
					</Tabs>
				 </div>
			       
			</div>
		 )
	 }
}
