import { makeAutoObservable } from 'mobx'
class TaskStore {
  constructor() {
    makeAutoObservable(this)
  }
  list = [
    {
      id: 1,
      name: '学习react',
      isDone: true,
    },
    {
      id: 2,
      name: '搞定mobx',
      isDone: true,
    },
  ]
  // 计算属性 只有所有子项都是选中的时候 才能选中的状态
  get isAll() {
    return this.list.every((item) => item.isDone)
  }
  get isFinishedLength() {
    return this.list.filter((item) => item.isDone).length
  }
  // 单选操作
  singleCheck(id, isDone) {
    // 查找
    const item = this.list.find((item) => item.id === id)
    item.isDone = isDone
  }
  //全选操作
  allCheck(checked) {
    // 把所有项的isDone属性 都按照传入的最新的状态修改
    this.list.forEach((item) => {
      item.isDone = checked
    })
  }

  // 删除
  delTask = (id) => {
    // this.list = this.list.filter((item) => item.id !== id)
    // findindex 返回 在数组中查找符合第一个元素的index索引
    const index = this.list.findIndex((item) => item.id === id)
    this.list.splice(index, 1)
  }

  // 新增
  addTask = (task) => {
    this.list.push(task)
  }
}
export default TaskStore
