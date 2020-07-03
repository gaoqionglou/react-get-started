import React, { Component } from 'react'
import { adminRouter } from './routes'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
class StandardApp extends Component {
    render() {
        console.log(adminRouter)
        return (
            <div>
                <span>StandardApp</span>
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
            </div>
        )
    }
}
export default StandardApp