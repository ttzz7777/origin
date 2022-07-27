import {
  BrowserRouter,
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom'
import { history } from './utils/history'
import Login from '@/pages/Login'
import Layout from './pages/Layout'
import './App.css'
import { AuthComponent } from '@/components/AuthComponents'
import Publish from './pages/Publish'
import Home from './pages/Home'
import Article from './pages/Article'
function App() {
  return (
    // 路由配置
    <HistoryRouter history={history}>
      <div className="App">
        <Routes>
          {/* 创建路由path路径和组件对应关系 */}
          {/* Layout需要鉴权处理的 */}
          {/* 这里的Layout不一定不能写死 要根据是否登录进行判断 */}
          <Route
            path="/"
            element={
              <AuthComponent>
                <Layout />
              </AuthComponent>
            }>
            {/* 二级路由 */}
            <Route index element={<Home />}></Route>
            <Route path="/article" element={<Article />}></Route>
            <Route path="/publish" element={<Publish />}></Route>
          </Route>
          {/* 这个不需要 */}
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </HistoryRouter>
  )
}

export default App
