import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addBlog } from '../../actions/blogs'

export class Form extends Component {
    state = {
        title: '',
        content: '',
    }

    static propTypes = {
        addBlog: PropTypes.func
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    onSubmit = e => {
        e.preventDefault();
        const {title, content} = this.state;
        const blog = {title, content};
        this.props.addBlog(blog);
    }
    render() {
        const {title, content} = this.state
        return (
            <div className='card card-body mt-4 mb-4'>
                <h2>Add Blog</h2>
                <form  onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input className="form-control" type="text" name="title" onChange={this.onChange} value={title}></input>
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <input className="form-control" type="text" name="content" onChange={this.onChange} value={content}></input>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {addBlog})(Form);
