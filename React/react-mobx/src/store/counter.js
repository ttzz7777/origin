// 编写第一个mobx store小案例
import { makeAutoObservable } from 'mobx'
class CounterStore {
    // 1. 定义数据
    count = 0
        // 定义一个原始数据 list
    list = [1, 2, 3, 4, 5, 6]
    constructor() {
            // 2. 把数据弄成响应式
            makeAutoObservable(this)
        }
        // 定义计算属性
    get filterList() {
            return this.list.filter((item) => item > 2)
        }
        // 方法修改list
    addList = () => {
            this.list.push(7, 8, 9)
        }
        // 3. 定义action函数（用来修改数据）
    addCount = () => {
        this.count++
    }
}

// 4. 实例化 然后导出给react使用
export { CounterStore }