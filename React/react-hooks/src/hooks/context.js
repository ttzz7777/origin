// 1. 调用create方法
// 2. 通过顶层组件包裹一下 Context.Provider
// 3. 底层组件 useContext(createContext返回的对象)

import { createContext } from "react"

const Context = createContext()

export default Context