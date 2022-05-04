// React：框架的核心包
// ReactDom：专门做渲染相关的包

import React from 'react'
import ReactDOM from 'react-dom/client'
// 应用的全局样式文件
import './index.css'
// 引入根组件
import App from './App16'

// 渲染根组件app 到一个id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    // 严格模式节点需要去掉
    // useEffect的执行时机
    <
    App / >
)