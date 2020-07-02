import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class ArticalDetail extends Component {
    render() {
        return (
            <div>
               Detail {this.props.match.params.id}
            </div>
        )
    }
}
export default ArticalDetail