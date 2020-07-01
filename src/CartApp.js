import React, { Component } from "react"
import { CartList } from './components'
//练习使用redux
class CartApp extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
 
        return (

            <div>
                <CartList store={this.props.store}   />
            </div>
        );
    }
}

export default CartApp;