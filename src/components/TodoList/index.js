import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })).isRequired,
        onCheckChange: PropTypes.func
    }
    render() {
        console.log(this.props)
        return (
            this.props.todos.map((value, key) => {
                return <TodoItem onCheckItemChange={this.props.onCheckChange} id={value.id} key={key} todo={value.title} completed={value.completed}></TodoItem>
            })
        );
    }
}

export default TodoList;