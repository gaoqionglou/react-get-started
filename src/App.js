import React, { Component } from "react"
import { TodoHeader, TodoInput, TodoList } from './components'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            todoList: [],
            x: 1,
            isLoading: false
        })
    }
    addTodo = (todoTitle) => {

        this.setState({
            todoList: this.state.todoList.concat({
                id: Math.random(),
                title: todoTitle,
                completed: false
            })
        })
    }
    onCheckChange = (id) => {
        this.setState((prevState) => {
            return {
                todoList: prevState.todoList.map(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }
        }, () => {

        })
    }
    getData = () => {
        this.setState({
            isLoading: true
        })
        this.__proto__.http.getTodos()
            .then(resp => {
                // console.log(resp.data)
                if (resp.status === 200) {

                    this.setState({
                        todoList: resp.data
                    })
                } else {
                    alert("请求出错")
                }
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                this.setState({
                    isLoading: false
                })
            })
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        return (

            <div>
                <TodoHeader x={this.state.x} y={2}>代办</TodoHeader>
                <TodoInput addTodo={this.addTodo} />
                {

                    this.state.isLoading ? <div>loading</div> : <TodoList todos={this.state.todoList} onCheckChange={this.onCheckChange} />
                }


            </div>
        );
    }
}

export default App;