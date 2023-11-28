import React from 'react';

const AddBlog = () => {
    return (
        <div className='container-fluid'>
            <form>
                <h1>Compose</h1>
                <div class="mb-3 form-group">
                    <label className="form-label" htmlFor="title">Title</label>
                    <input className="form-control" type="text" name="title" id="title" />
                </div>
                <div class="mb-3 form-group">
                    <label className="form-label" htmlFor="body">Post</label>
                    <textarea className="form-control" name="body" id="body" rows="5"></textarea>
                </div>
                <div className="mb-3 form-group">
                    <button className="btn btn-primary" type="submit">Publish</button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;
