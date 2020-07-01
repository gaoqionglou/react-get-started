import React, { Component } from 'react'
import { BlogList } from './components'
import { connect } from 'react-redux'
const mapSomeDataFromPropsForLog = (state) => {
    return {
        data: state
    }
}

class BlogApp extends Component {
    constructor(props) {
        super(props)
        this.state = {

            data: {}
        }
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <BlogList />
            </div>
        )
    }
}
export default connect(mapSomeDataFromPropsForLog)(BlogApp)