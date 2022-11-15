import React, { Component } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate()

  const goAbout = () => {
    navigate('/about?id=1001&name=cp', { replace: true })
  }
  return (
    <div>
      this is login
      <button onClick={goAbout}>跳到关于</button>
    </div>
  )
}
export default Login
