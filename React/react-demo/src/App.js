import React from 'react'
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Board from './pages/Board'
import Article from './pages/Article'

function App() {
  return (
    <BrowserRouter>
      <Link to="/">登录</Link>
      <Link to="/home">首页</Link>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}>
          <Route index element={<Board />}></Route>
          <Route path="article" element={<Article />}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
