import React, { Component } from 'react'
import { render } from 'react-dom'
import './index.css'
import classNames from 'classnames'
import styled from 'styled-components'

// eslint-disable-next-line
import AppHome from './App'
import * as services from './services'

import { CountBtn, Counter } from './components'
// eslint-disable-next-line
import { CounterProvider } from './countStore'
// eslint-disable-next-line
import withCopyRight from './withCopyRight'
import Another from './Another'
// eslint-disable-next-line
import CartApp from './CartApp'
import store from './store'
React.Component.prototype.http = services

// const app =  <h1>Welcome to React</h1>

// const createApp = (prop)=>{
// return <h1>{prop.title}</h1>
// }
// const app = createApp({
//     title:'React !!'
// })

// const App = (prop) => {
//     return (
//         <h1>{prop.title}</h1>
//     )
// }
const style = { color: 'blue' }

const Title = styled.h1`
color:#EAEAEA
`
// eslint-disable-next-line
class App extends React.Component {
    render() {
        return (
            <div>
                <h1 style={style}>Welcome to {this.props.title}</h1>
                <p className="has-text-red">className</p>
                <p className={classNames('a', { 'b': true, 'c': false })}>classNameS</p>
                <Title>Title</Title>
            </div>)
    }
}


// const app = new App({
//     title:'Invisible'
// }).render()

// eslint-disable-next-line
class CounterApp extends Component {
    render() {
        return (
            <>
                <CountBtn type='decrement'>-</CountBtn>
                <Counter />
                <CountBtn type='increment' >+</CountBtn>
            </>
        )
    }
}

class HocApp extends Component {
    render() {
        return (
            <>
                <div>HocApp


                <Another name="props in another.js" />
                </div>
            </>
        )
    }
}
// eslint-disable-next-line
const HocCmp = HocApp

window.store = store
render(
    //练习context
    // <CounterProvider>
    //     <CounterApp />
    // </CounterProvider>
    
    //练习HOC高阶组件
    // <HocCmp />
    
    <CartApp/>,
    document.querySelector('#root')
)