import React from 'react'
//条件渲染
//技术方案：三元表达式（常用），逻辑&&运算


//1.三元表达式--满足条件菜渲染一个span标签
//2.&&
const flag = true
export default function App2() {
    return (
        <div className='App2'>
            {flag ? (
            <div>
                <span>this is span</span>
            </div>) : null}

            {true && <span>this is span</span>}
        </div>
    )
}
