import { makeAutoObservable } from "mobx"

class ListStore {
    List = ['vue', 'react']
    constructor() {
        makeAutoObservable(this)
    }
    addList = () => {
        this.List.push('angular')
    }
}

export { ListStore }