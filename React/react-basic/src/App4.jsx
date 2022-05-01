import React from 'react'
// jsx 样式控制
// 1.行内样式 -- 在元素身上绑定一个style属性即可

// 2.类名样式  -- 在元素身上绑定一个className属性即可

import './App4.css'
const style = {
  color: 'red',
  fontSize: '30px'
}
// 如果动态控制以下active类名 满足条件才有

const activeFlag = true
export default function App4() {
  return (
    <div>
      <span style={style}>this is span</span>
      <span className={activeFlag ? 'active' : null}>测试类名样式</span>
    </div>
  )
}
