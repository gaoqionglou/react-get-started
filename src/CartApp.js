import React, { Component } from "react"
import { CartList } from './components'
class App extends Component {
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

export default App;