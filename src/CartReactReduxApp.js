import React, { Component } from "react"
import { CartRRList } from './components'
//练习使用react-redux redux-thunk
class CartReactReduxApp extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {

        return (

            <div>
                <CartRRList store={this.props.store} />
            </div>
        );
    }
}

export default CartReactReduxApp;