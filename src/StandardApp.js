import React, { Component } from 'react'
import { adminRouter } from './routes'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import { Frame } from './components'

import { connect } from 'react-redux'

const mapState = state => ({
    isLogin: state.user.isLogin
})

class StandardApp extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        console.log(this.props)
        return (
            this.props.isLogin ?
                <Frame>

                    <Switch>
                        {
                            adminRouter.map(route => {
                                return <Route exact={route.exact} key={route.pathname} path={route.pathname} render={(routeProps) => {
                                    return <route.component {...routeProps} />
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