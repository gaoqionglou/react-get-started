import React, { Component } from 'react'

class BlogItem extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <li>
                <h3>{this.props.title}</h3>
                <p>{this.props.body}</p>
            </li>
        )
    }
}

export default BlogItem
