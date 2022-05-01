import React from 'react'
// 函数组件的创建和渲染
// 创建
function Hello() {
  const clickHandler = (e) => {
    console.log('函数组件中的事件被触发了', e)
  }
  return <div onClick={clickHandler}>hello</div>
}

//渲染 <Hello/>  <Hello></Hello>

// 类组件的创建和渲染

// 创建
class HelloComponent extends React.Component {
  // 事件回调函数(标准写法 避免this指向问题)
  // 这样写 回调函数中的this指向的是当前的组件实例对象
  clickHandler = () => {
    console.log('类组件中的事件被触发了')
  }
  render() {
    return <div onClick={this.clickHandler}>this is class Component</div>
  }
}
// 渲染 <HelloComponent/>  <HelloComponent></HelloComponent>

export default function App7() {
  return (
    <div>
      {/* 渲染Hello组件 */}
      <Hello />
      {/* 渲染类组件 */}
      <HelloComponent />
    </div>
  )
}
