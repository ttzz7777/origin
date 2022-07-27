// 1. 导入useNavigate
import { useNavigate } from 'react-router-dom'

function Login() {
  // 2.执行useNavigate得到一个跳转函数
  const navigate = useNavigate()
  // 跳转到关于页
  function goAbout() {
    // 3. 调用跳转函数传入目标路径
    navigate('/about?id=1001&name=cp', { replace: true })
  }
  return (
    <div>
      Login
      <button onClick={goAbout}>跳到关于</button>
    </div>
  )
}

export default Login
