import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types';
class TodoInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
        this.inputDom = createRef()
    }

    static propTypes = {
        btnText: PropTypes.string
    }
    static defaultProps = {
        btnText: "添加ADD"
    }
    handleInputChange = (e) => {
        this.setState({
            inputValue: e.currentTarget.value
        })

        // this.setState((prevState) => {
        //    return {
        //     inputValue:prevState.inputValue+1
        //    }
        // }, () => {
        //     console.log(this.state)
        // })
    }
    handleAdd = (e) => {
        if (this.state.inputValue === '') return
        this.props.addTodo(this.state.inputValue)
        this.setState({
            inputValue: ''
        }, () => {
            this.inputDom.current.focus()
        })
    }
    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.handleAdd()
        }
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleKeyUp}
                    ref={this.inputDom}
                />
                <button
                    //这种方式每次render重新生成一个匿名函数
                    //  onChange={()=>{
                    //      console.log(this.state)
                    //  }}
                    onClick={this.handleAdd}
                >{this.props.btnText}</button>
            </div>
        );
    }
}

export default TodoInput;