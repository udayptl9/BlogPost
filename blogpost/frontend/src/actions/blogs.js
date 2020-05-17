import axios from 'axios'

import { GET_BLOGS, DELETE_BLOG, ADD_BLOG } from './types'

export const getBlogs = () => dispatch => {
    axios.get('/api/blogs/')
        .then(res => {
            dispatch({
                type: GET_BLOGS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const deleteBlog = (id) => dispatch => {
    axios.delete(`/api/blogs/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_BLOG,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const addBlog = (blog) => dispatch => {
    axios.post('/api/blogs/', blog)
        .then(res => {
            dispatch({
                type: ADD_BLOG,
                payload: res.data
            })
        }).catch(err => console.log(err))
}
