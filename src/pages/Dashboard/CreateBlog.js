import React from 'react';
import { Link } from "react-router-dom";

import '../../assets/css/dashboard.css';


export default function CreateBlog() {
    return (
        <div className="dashboard">
            <div className="row px-3 px-md-5 pt-lg-5">
                <div className="col pt-5 pt-md-5 pt-lg-0">
                    <h2 className="d-blog-sub-title mt-5 mt-md-0 mt-lg-0">Create Blog</h2>
                </div>
            </div>
            <div className="row px-3     px-md-0 px-lg-0">
                <div className="col mx-2 mx-md-5 mx-lg-5 my-md-3  create-box">
                    <div className="px-1 py-1 px-md-3 px-lg-3 pt-md-3 pt-lg-3"> 
                        <p>Title</p>
                        <input className="input-field mt-0" type="text"></input>
                        <p className="mt-3">Description</p>
                        <textarea className="input-field mt-0" type="text" style={{width:"100%"}}></textarea>
                    </div>
                    <div className="mb-3 px-1 px-md-3 px-lg-3">
                        <button className="delete-btn">Save</button>
                        <Link to="/dashboard/blog"><button className="delete-btn ml-2 mt-4 ">Cancel</button></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}