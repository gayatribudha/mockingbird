import React from 'react';
import { Link } from 'react-router-dom';


import ToggleBtn from '../ToggleBtn/ToggleBtn';


export default function DashBlogCard({blog}) {
    return (
        <div key={blog._id} className="col-sm-12 col-md-5 col-lg-5 ml-md-4 ml-lg-4  mt-3 d-blog-card">
            <Link to={`/dashboard/${blog.category}/${blog._id}`} style={{ textDecoration: "none" }}>
                <div className="pt-3">
                    <h3 className="blog-title">{blog.title}</h3>
                    <div className="blog-para" dangerouslySetInnerHTML={{ __html: blog.description }}></div>
                </div>
            </Link>
            <ToggleBtn id={blog._id} checkedStatus={blog.publish} />
        </div>

    )
}