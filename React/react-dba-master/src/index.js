import React from "react";
import ReactDOM from "react-dom";
import Route from "./routes/bdarouter";
import 'antd/dist/antd.css';
import { configure } from "mobx";
import {Provider} from "mobx-react";
import Store from "./stores/store";
import OrganStore from "./stores/organstore";
import UserNameStore from "./stores/usernamestore";

export const stores = {
  Store,
  OrganStore,
  UserNameStore
};
window._____APP_STATE_____ = stores;
//严格模式
configure({ enforceActions: true });

ReactDOM.render(
	<Provider {...stores}>
		<Route />
	</Provider>
,document.getElementById("root"))