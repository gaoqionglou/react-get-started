import React, { Component } from 'react'
import BlogItem from './BlogItem'
import { connect } from 'react-redux'
import { fetchBlogList } from '../../actions/blog'
const mapStateFromProps = (state) => {
    return {
        blogList: state.blog.list,
        isLoading: state.blog.isLoading,
        errorMsg: state.blog.errorMsg
    }
}
class BlogList extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    componentDidMount() {
        this.props.fetchBlogList()
    }
    render() {

        const {
            // eslint-disable-next-line
            list, isLoading, errorMsg
        } = this.props
        const hasErr = Boolean(errorMsg)
        console.log('------------', this.props)
        return (

            isLoading ? <div>loading</div> :
                <ul>

                    {
                        hasErr ? <div>{errorMsg}</div>
                            :
                            this.props.blogList.map(blog => {
                                return <BlogItem key={blog.id} {...blog} />
                            })
                    }

                </ul>
        )
    }
}
export default connect(mapStateFromProps, { fetchBlogList })(BlogList)
