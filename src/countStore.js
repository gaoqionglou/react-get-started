import React, { Component, createContext } from 'react'
//createContext方法返回的是一个对象，包含着Provider和Consumer，Provider提供状态，Consumer接受状态
const {
    Provider,
    Consumer: CounterConsumer //解构重新赋值
} = createContext()

//封装一个基本的provider
class CounterProvider extends Component {
    constructor(props) {
        super(props)
        //此状态共享，任何后代组件都可以通过CounterConsumer来接受这个值
        this.state = {
            count: 100
        }
    }


    //以下方法也通过CounterProvider共享出来
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            //使用这个Provider这个组件，value必传，传入一个对象
            <Provider value={
                {
                    count: this.state.count,
                    onIncrementCount: this.incrementCount,
                    onDecrementCount: this.decrementCount
                }
            }>
                {this.props.children}
            </Provider>
        )
    }
}

export { CounterProvider, CounterConsumer }