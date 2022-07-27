import React from "react";
import {BrowserRouter as Router, Route, Switch, withRouter,Redirect} from "react-router-dom";
import LoadableComponent from '../components/LoadableComponent/LoadableComponent'
import {inject, observer} from "mobx-react";
import axios from "axios";


const Index = LoadableComponent(import('../components/content/index'))
const FrameIndex = LoadableComponent(import('../components/Index/index'))
const Login = LoadableComponent(import('../components/login/login'))


@inject('Store')
@observer
class BasicRoute extends React.Component{
	render() {
		const { isLogin } = this.props.Store;
		return <Router>
			<Switch>
				<Route path="/" exact render={() => (
					isLogin ? (<Redirect to="/frameindex" />) : (<Login />)
				)}  />
				<Route path="/frameindex" exact render={() => (
					isLogin ? (<FrameIndex />) : (<Redirect to="/" />)
				)} />
				<Route path="/index" exact render={() => (
					isLogin ? (<Index />) : (<Redirect to="/" />)
				)} />
			</Switch>
		</Router>;
	}
}
export default BasicRoute;