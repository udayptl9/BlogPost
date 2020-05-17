import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getBlogs, deleteBlog } from '../../actions/blogs'
export class Blogs extends Component {
    static propTypes = {
        blogs: PropTypes.array.isRequired,
        getBlogs: PropTypes.func.isRequired,
        deleteBlog: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getBlogs()
    }

    render() {
        return (
            <Fragment>
                <h2>Blogs</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Content</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.blogs.map(blog => (
                            <tr key={blog.id}>
                                <td>{blog.id}</td>
                                <td>{blog.title}</td>
                                <td>{blog.content}</td>
                                <td><button onClick={this.props.deleteBlog.bind(this, blog.id)} className='btn btn-danger btn-sm'>Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    blogs: state.blogs.blogs
})

export default connect(mapStateToProps, {getBlogs, deleteBlog})(Blogs)
