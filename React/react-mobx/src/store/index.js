// 组合子模块
// 封装统一导出的供业务使用的方法
import React from 'react'
import { ListStore } from './list.Store'
import { CounterStore } from './counter'
// 1. 声明一个rootStore
class RootStore {
    constructor() {
        // 对子模块进行实例化操作
        // 将来实例化根store的时候
        // 根store有两个属性 分别是counterstore和liststore
        // 各自对应的值 就是我们导入的子模块实例对象
        this.CounterStore = new CounterStore()
        this.ListStore = new ListStore()
    }
}

// 实例化操作
const rootStore = new RootStore()
    // 使用react context机制 完成统一方法封装
    // 核心目的： 让每个业务组件可以通过统一一样的方法获取store中的数据
    // 方便调试是一个额外的补充的功能

// 查找机制：useContext 优先从provider value找 如果找不到 就会
// 找createContext方法传递孤傲来的默认参数
const context = React.createContext(rootStore)
    // 这个方法作用： 通过useContext拿到rootStore实例对象 然后返回
    // 只要在业务组件中 调用useStore()-> rootStore
const useStore = () => React.useContext(context)

export { useStore }