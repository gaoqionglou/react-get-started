import React, { Component } from "react"
import { User, Home, Artical } from './views'
import {Route,Link,Redirect} from 'react-router-dom'
//练习使用路由
class RouterApp extends Component {
    constructor(props) {
        super(props)
        this.state = {}
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
                <Route  exact component={Home} path='/home'/>
                <Route component={User} path='/user'/>
                <Route component={Artical} path='/artical'/>
                <Redirect to ='/home' from ='/'/>
            </div>
        );
    }
}

export default RouterApp;