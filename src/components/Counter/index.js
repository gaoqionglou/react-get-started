import React, { Component } from 'react'
import { CounterConsumer } from '../../countStore'
// eslint-disable-next-line
class Counter extends Component {
    render() {
        return (
            <CounterConsumer>
                {

                    // (
                    //     { count }
                    // )    {count} = arg = {count:100}
                    //再次解构
                    (
                        { count }
                    ) => {
                        return (
                            <span>{count}</span>
                        )
                    }
                }
            </CounterConsumer>
        )
    }

}
export default Counter