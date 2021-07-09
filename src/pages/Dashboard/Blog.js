import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/css/dashboard.css';

export default function Blog(props) {
    const { _id, title, description } = props.data;

    return (
        <div className="col-sm-12 col-md-5 col-lg-5 ml-md-4 ml-lg-4  mt-3 d-blog-card">
            <Link activeClassName="sidebar-menu_active" to={`/dashboard/blog/${_id}`} style={{ textDecoration: "none" }}>
                {/* <Link activeClassName="sidebar-menu_active" to={{ pathname: `/dashboard/blog/${blog.title}`, blogDetail: { id: `${blog._id}`, title: `${blog.title}`, description: `${blog.description}`} }} style={{ textDecoration: "none" }}> */}
                <div className="pt-3">
                    <h3 className="blog-title">{title}</h3>
                    <p className="blog-para"><div dangerouslySetInnerHTML={{ __html: description }}></div></p>
                </div>
            </Link>
            <form>
                <p >Publish <input className="publish-checkbox" type="checkbox" name="publish" /></p>
            </form>
        </div>
    );
}