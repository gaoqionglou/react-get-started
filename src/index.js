import React, { Component } from 'react'
import { render } from 'react-dom'
import classNames from 'classnames'
import styled from 'styled-components'

// eslint-disable-next-line
import AppHome from './App'
import * as services from './services'
import './App.less'
import { CountBtn, Counter } from './components'
// eslint-disable-next-line
import { CounterProvider } from './countStore'
// eslint-disable-next-line
import withCopyRight from './withCopyRight'
import Another from './Another'
// eslint-disable-next-line
import CartApp from './CartApp'
// eslint-disable-next-line
import CartRRApp from './CartReactReduxApp'
import store from './store'

import { Provider } from 'react-redux'
import BlogApp from './BlogApp'
import RouterApp from './RouterApp'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { ConfigProvider, Button } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import StandardApp from './StandardApp'
import { mainRouter,adminRouter } from './routes'


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

// window.store = store
render(
    //练习context
    // <CounterProvider>
    //     <CounterApp />
    // </CounterProvider>

    //练习HOC高阶组件
    // <HocCmp />

    //练习Redux
    // <CartApp store={store}/>
    //练习react-redux
    // <Provider store={store}>
    //     <CartRRApp />
    // </Provider>

    //模拟带网络异步请求的redux
    // <Provider store={store}>
    //     <BlogApp />
    // </Provider>

    //Router
    // <ConfigProvider locale={zhCN} >
    //     <Router>
    //         <Route component={RouterApp} path='/' />
    //     </Router>
    // </ConfigProvider>

    //
    <Router>
        <Switch>
            <Route path="/admin" render={(routeProps) => {
                //TODO：登陆权限处理，需要登陆才能访问/admin
                return <StandardApp {...routeProps} />
            }} />
            {
                mainRouter.map(route => {
                    return <Route key={route.pathname} path={route.pathname} component={route.component} />
                })
            }
           <Redirect to='/admin' from='/' exact/>
           <Redirect to='/404'/>
        </Switch>
    </Router>
    ,

    document.querySelector('#root')
)