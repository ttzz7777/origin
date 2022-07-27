import React from "react";



class Index extends React.Component{
	constructor(props) {
	    super(props)		
		
	}
	componentWillMount(){
		//alert(this.props.Store.activeKey)
	}
	componentDidMount(){
		//alert(this.props.Store.activeKey)
	}
	componentWillUnmount (){
		//alert(4)
	}
	render(){
		return (
			<div>
				aaa
			</div>
		)
	}
	
}

export default Index