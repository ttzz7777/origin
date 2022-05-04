import React, { useState } from 'react'

function Number(props) {
  const [num, setNum] = useState(() => {
    // 这里目的为了体现初始值经过一定的计算
    // 这个计算比较广泛的概念
    // 只要无法直接确定 需要通过一定的操作才能获取 就可以理解为计算
    // 循环遍历一万条数据才能确定这里的初始值是什么
    return props.num
  })
  return (
    <div>
      <button onClick={() => setNum(num + 1)}>{num}</button>
    </div>
  )
}
export default function App5() {
  return (
    <div>
      <Number num={10} />
      <Number num={20} />
    </div>
  )
}
