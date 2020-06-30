import React, { Component, useState, useEffect } from 'react'
import PropTypes from 'prop-types';


const Counter = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("update")
        document.title =`当前数量为${count}`
    })
    return (
        <div>
            <p>当前数量为{count}</p>
            <button onClick={() => { setCount(count - 1) }}>-</button>
            <span>{count}</span>
            <button onClick={() => { setCount(count + 1) }}>+</button>
        </div>
    )
}


class TodoHeader extends Component {


    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.children}</h3>
                <Counter />
            </div>
        );
    }
}

export default TodoHeader;

TodoHeader.propTypes = {
    title: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number
}
TodoHeader.defaultProps = {
    title: "XpppXaaaa"
}