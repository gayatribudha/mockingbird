import React from 'react';
import { Link } from "react-router-dom";
import cover from '../../assets/images/cover.jpg';
import './BlogCard.css';

export default function BlogCard({ blog }) {

    

    return (
        <div className="row mt-4">
            <div className="col-sm-12 col-md-4 col-lg-4">
                <Link to="/blog/title"><img className="cover-picture img-fluid" src={blog.coverPicture ? `http://localhost:3001/` + blog.coverPicture : "Nothing"} alt="cover" style={{height: "120px", width: "150px"}}/></Link>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8">
                <Link to={`/blogs/${blog._id}`} style={{ textDecoration: "none" }}>
                    <h2 className="blog-title mt-1">{blog.title}</h2>
                    <h3 className="blog-author">{blog.author}</h3>
                    <div className="blog-description" dangerouslySetInnerHTML={{ __html: blog.description }}></div>
                </Link>
            </div>
        </div>
    )
}