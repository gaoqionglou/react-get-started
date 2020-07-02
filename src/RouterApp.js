import React, { Component } from "react"
import { User, Home, Artical, ArticalDetail, NotFound } from './views'
import { Route, Link, Redirect } from 'react-router-dom'
//练习使用路由
class RouterApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
        }
    }


    render() {

        return (

            <div>
                RouterApp
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/user'>User</Link></li>
                    <li><Link to='/artical'>Artical</Link></li>
                </ul>
                {/* <Route exact component={Home} path='/home' /> */}
                <Route exact path='/home' render={(routeProps) => {
                    return <Home {...routeProps} x={1} />
                }} />
                {/* <Route exact component={User} path='/user' /> */}
                <Route exact path='/user' render={(routeProps) => {
                    return this.state.isLogin ? <User {...routeProps} /> : <div>请登录</div>
                }} />
                <Route exact component={Artical} path='/artical' />
                <Route exact component={ArticalDetail} path='/artical/:id' />
                <Route exact component={NotFound} path='/404' />

                <Redirect to='/home' from='/' exact />
                <Redirect to='/404' />
            </div>
        );
    }
}

export default RouterApp;