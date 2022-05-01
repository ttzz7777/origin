import React from 'react'
//  如何创建自定义参数？
// 1. 只需要一个额外参数 (clickHandler)-> {()=>clickHandler('自定义的参数')}
// 2. 既需要e也需要额外的参数 {(e)=>clickHandler(e,'自定义的参数')}
function Hello() {
  const clickHandler = (e, msg) => {
    console.log('函数组件中的事件被触发了', e, msg)
  }
  return <div onClick={(e) => clickHandler(e, 'this is msg')}>click me</div>
}

export default function App8() {
  return (
    <div>
      <Hello />
    </div>
  )
}
