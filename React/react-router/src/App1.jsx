import React from 'react'
import Layout from './Layout'
import Login from './Login'
import Board from './Board'
import Article from './Article'
import NotFound from './NotFound'

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
export default function App1() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 定义二级路由嵌套 */}
          {/* 默认二级 添加index属性 把它自己的path干掉 */}
          <Route index element={<Board />}></Route>
          <Route path="article" element={<Article />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        {/* 当所有的路径都没有匹配时 做兜底匹配 显示未找到 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
