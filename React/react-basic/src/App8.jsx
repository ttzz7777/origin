import React from 'react'
//  如何创建自定义参数？
function Hello() {
  const clickHandler = (e) => {
    // 阻止默认行为
    e.preventDefault()
    console.log('函数组件中的事件被触发了')
  }
  return (
    <div>
      <a onClick={clickHandler} href="https://baidu.com">
        百度
      </a>
    </div>
  )
}
export default function App8() {
  return (
    <div>
      <Hello />
    </div>
  )
}
