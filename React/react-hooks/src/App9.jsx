import React, { useContext, useState } from 'react'

import Context from './hooks/context'

function ComA() {
  const count = useContext(Context)
  return (
    <>
      <div>this is ComA</div>
      app传过来的数据为:{count}
      <ComC />
    </>
  )
}

function ComC() {
  const count = useContext(Context)
  return (
    <div>
      this is ComC
      <br />
      app传过来的数据为:{count}
    </div>
  )
}

export default function App9() {
  const [count, setCount] = useState(20)
  return (
    <Context.Provider value={count}>
      <div>
        <ComA />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </Context.Provider>
  )
}

// context 如果要传递的数据 只需要在整个应用初始化的时候传递一次就可以
// 就可以选择在当前文件里做数据提供

// 如果context需要传递数据并且将来还需要在对数据做修改 底层组件也需要
// 跟着一起变 写到app.js
