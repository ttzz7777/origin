import React, { useEffect } from 'react'

// useEffect
// 1. 不加依赖项 - 初始化 + 重新渲染
// 2. 加[] - 初始化执行一次
// 3. 加特定的依赖项[count，name] - 首次执行 + 任意一个变化执行

export default function App7() {
  useEffect(() => {
    //发送请求
    async function loadData() {
      fetch('http://geek.itheima.net/v1_0/channels')
        .then((response) => response.json())
        .then((data) => console.log(data))
    }
    loadData()
  }, [])

  return <div></div>
}
