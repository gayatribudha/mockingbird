import React, { useState, useEffect } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import axios from "axios";


export default function BlogPreview() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        blogsList()
        async function blogsList() {
            try {
                let res = await axios.get(`/blogs/blogPreview`);
                setBlogs(res.data);
            }
            catch (error) {
                console.log(error);
            }
        }
    }, []);

    return (
        <section className="blog-section" id="blog-section">
            <div className="row mt-5 pt-5 mx-md-5 mx-lg-5 px-md-4 px-lg-4">
                <div className="col">
                    <div className="row">
                        <div className="d-none d-md-block d-lg-block col-md-5 col-lg-5">
                            <hr className="hr-line" />
                        </div>
                        <div className="col-md-2">
                            <h1 className="text-center d-block title">Blogs</h1>
                        </div>
                        <div className="col-md-5 col-lg-5">
                            <hr className="hr-line" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <p className="caption text-center">Find ideas and perceptions.</p>
                        </div>

                    </div>
                    <div className="row my-4">
                        {
                            blogs.slice(0, 4).map(blog => (
                                <div key={blog._id} className="col-sm-12 col-md-6 col-md-6 mt-4 ">
                                    <BlogCard blog={blog} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
};