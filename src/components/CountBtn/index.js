import React, { Component } from 'react'
import { CounterConsumer } from '../../countStore'
// eslint-disable-next-line
class CountBtn extends Component {
    render() {
        return (
            <CounterConsumer>

                {
                    ({ onIncrementCount, onDecrementCount }) => {
                        const handler = this.props.type === 'increment' ? onIncrementCount : onDecrementCount
                        return (<button onClick={handler}>{this.props.children}</button>)
                    }
                }

            </CounterConsumer>
        )
    }
}
export default CountBtn