import React, { Component } from 'react'
import { adminRouter } from './routes'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import {Frame} from './components'
class StandardApp extends Component {
    render() {
   
        return (
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
        )
    }
}
export default StandardApp