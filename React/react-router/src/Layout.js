import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      layout
      {/* 二级路由出口 */}
      <Outlet />
    </div>
  )
}
