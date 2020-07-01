import React, { Component } from 'react'
import BlogItem from './BlogItem'
import { connect } from 'react-redux'
import { fetchBlogList } from '../../actions/blog'
const mapStateFromProps = (state) => {
    return {
        blogList: state.blog.list,
        isLoading: state.blog.isLoading
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
            list, isLoading
        } = this.props
        console.log('------------', this.props)
        return (

            isLoading ? <div>loading</div> :
                <ul>

                    {
                        this.props.blogList.map(blog => {
                            return <BlogItem key={blog.id} {...blog} />
                        })
                    }

                </ul>
        )
    }
}
export default connect(mapStateFromProps, { fetchBlogList })(BlogList)
