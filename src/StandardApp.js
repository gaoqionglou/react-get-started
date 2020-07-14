import React, { Component } from 'react'
import { adminRouter } from './routes'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import { Frame } from './components'

import { connect } from 'react-redux'

const localRole = JSON.parse(window.localStorage.getItem('userInfo')) !== null ? JSON.parse(window.localStorage.getItem('userInfo')).role : ''
const sessionRole = JSON.parse(window.sessionStorage.getItem('userInfo')) !== null ? JSON.parse(window.sessionStorage.getItem('userInfo')).role : ''

const getRole = () => {
    if (localRole == '') {
        return sessionRole
    } else {
        return localRole
    }
}

const mapState = state => ({
    isLogin: state.user.isLogin,
    role: state.user.role === '' ? getRole() : state.user.role
})

class StandardApp extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        console.log("StandardApp", this.props)
        return (
            this.props.isLogin ?
                <Frame>

                    <Switch>
                        {
                            adminRouter.map(route => {
                                return <Route exact={route.exact} key={route.pathname} path={route.pathname} render={(routeProps) => {
                                    const hasPermission = route.roles.includes(this.props.role)
                                    if (route.pathname === '/admin/login') return <route.component {...routeProps} />
                                    return hasPermission ? <route.component {...routeProps} /> : <Redirect to='/admin/noauth' />
                                }} />
                            })
                        }
                        <Redirect to={adminRouter[0].pathname} from='/admin' exact />
                        <Redirect to="/404" />
                    </Switch>
                </Frame>
                :
                <Redirect to='/login' />
        )
    }
}
export default connect(mapState)(StandardApp)