let that
class Tab {
    constructor(id) {
        // 获取元素
        that = this
        this.main = document.querySelector(id)
        this.add = this.main.querySelector('.tabadd')
            //获取li的父元素
        this.ul = this.main.querySelector('.firstnav ul:first-child') //★
            //获取section的父元素
        this.fsection = this.main.querySelector('.tabscon')
        this.init()
    }
    init() {
            this.updateNode()
                //init 初始化操作让相关的元素绑定事件
            this.add.onclick = this.addTab
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i
                this.lis[i].onclick = this.toggleTab
                this.remove[i].onclick = this.removeTab
                this.spans[i].ondblclick = this.editTab
                this.sections[i].ondblclick = this.editTab
            }
        }
        //因为我们动态添加元素 需要重新过去对应的元素
    updateNode() {
            this.spans = this.main.querySelectorAll('.firstnav li span:first-child')
            this.lis = this.main.querySelectorAll('li')
            this.sections = this.main.querySelectorAll('section')
            this.remove = this.main.querySelectorAll('.icon-guanbi')
        }
        //1. 切换功能
    toggleTab() {
            that.clearClass()
            this.className = 'liactive'
            that.sections[this.index].className = 'conactive'
        }
        //清除所有li和section的类
    clearClass() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = ''
                this.sections[i].className = ''
            }
        }
        //2. 添加功能
    addTab() {
            that.clearClass()
                //(1)创建li元素和section元素
            let random = Math.random()
            let li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi">x</span></li>'
            let section = '<section class="conactive">测试' + random + '</section>'
                //(2)把创建的两个元素追加到对应的父元素中
            that.ul.insertAdjacentHTML('beforeend', li)
            that.fsection.insertAdjacentHTML('beforeend', section)
            that.init()
        }
        //3. 删除功能
    removeTab(e) {
            e.stopPropagation() //阻止冒泡 防止触发li 的切换点击事件
            let index = this.parentNode.index
                //根据索引号删除对应的li 和section remove()方法可以之际删除指定的元素
            that.lis[index].remove()
            that.sections[index].remove()
            that.init()
                //当我们删除的不是选中状态的li的时候，原来的选中状态li保持不变
            if (document.querySelector('.liactive')) return //若有选中状态，直接跳过
                //当我们删除了选中状态的li的时候，让它的前一个li处于选定状态
            index--
            //手动调用点击事件 不需要鼠标触发 前面为真才执行后面的
            that.lis[index] && that.lis[index].click()
        }
        //4. 修改功能
    editTab() {
        let str = this.innerHTML
            //双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.Selection.empty()
        this.innerHTML = '<input type="text" />' //外单内双
        let input = this.children[0]
        input.value = str
        input.select() //文本框里的文字处于选定状态
            //当我们离开文本框就把文本框里的值给span
        input.onblur = function() {
                this.parentNode.innerHTML = this.value
            }
            //按下回车也可以把文本框里面的值给span
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                this.blur() //手动调用失去焦点事件
            }
        }
    }
}
let tab = new Tab('#tab')