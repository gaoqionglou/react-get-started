import React, { Component } from 'react'
import styled from 'styled-components'
// eslint-disable-next-line
const Title = styled.h1`
color:#FF7777
`
const noop = () => { }
class TodoItem extends Component {
    //constructor只会执行一次
    constructor(props) {
        super(props)
        this.state = {
            txt: ''
        }
    }
    handleCheck = () => {
        // ES6 对象的解构赋值
        const {
            //默认一个空的匿名函数
            onCheckItemChange = noop,
            id
        } = this.props
        onCheckItemChange && onCheckItemChange(id)
    }

    static getDerivedStateFromProps(props) {
        return {
            txt: props.completed ? '已完成' : '未完成'
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState)
        return nextProps.completed !== this.props.completed
    }

    //props state发生变化会触发render
    render() {
        console.log("TodoItem render", this.props.id)
        return (
            <div>
                <input type="checkbox" checked={this.props.completed} onChange={this.handleCheck}></input>
                <span>{this.props.todo} {this.state.txt}</span>
            </div>
        );
    }
}

export default TodoItem;