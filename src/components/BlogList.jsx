import React from 'react'
import './BlogList.css';

const BlogList = ({ blogs }) => {

    return (
        <div className="cards-container">
            <h1>Blogs</h1>
            <div className="cards-container">
                <h1>Blogs</h1>
                <div className="card">
                    <div className="row">
                        {blogs.map((blog, index) => (
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <h5 className="card-title">{blog.title}</h5>
                                <p className="card-text">{blog.body}</p>
                                <button className="btn btn-primary">Edit</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogList