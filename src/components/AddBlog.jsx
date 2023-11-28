import React, { useState } from 'react';


const AddBlog = ({handleAddBlog}) => {

    // Creating State Variable for New Blog
    const [blogData, setBlogData] = useState({
        title: '',
        body: '',
    });
    

    // This takes a variable from input field and adds it as a key-value pair in blogData
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value });
        // console.log("Inside handleChange ");
        // console.log(e);
    }

    // On submit call onNewBlog function from parent component
    const handleSubmit = (e) => {

        // preventing Default submission action by web browser
        e.preventDefault();
        // console.log("Inside handleSubmit ");
        // console.log(blogData);
        handleAddBlog(blogData);
    }
    

    return (
        <div className='container-fluid'>
            <form onSubmit={handleSubmit}>
                <h1>Compose</h1>
                <div class="mb-3 form-group">
                    <label className="form-label" htmlFor="title">Title</label>
                    <input className="form-control" type="text" name="title" id="title" value={blogData.title} onChange={handleChange}/>
                </div>
                <div class="mb-3 form-group">
                    <label className="form-label" htmlFor="body">Post</label>
                    <textarea className="form-control" name="body" id="body" rows="5" value={blogData.body} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3 form-group">
                    <button className="btn btn-primary" type="submit">Publish</button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;
