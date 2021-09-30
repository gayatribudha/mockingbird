import React, {useState, useEffect} from 'react';
import axios from "axios";

import BlogCard from '../components/BlogCard/BlogCard';
import Footer from '../partials/Footer/Footer';


export default function Blog() {
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
        <div className="container-fluid">
            <div className="row mt-3 mx-md-5 mx-lg-5 px-md-4 px-lg-4 ">
                <div className="col-sm-12 col-md-1 col-lg-1">
                    <h1 className="title">Blogs</h1>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-5">
                    <hr className="hr-line mt-md-4 mt-lg-4" />
                </div>
            </div>
            <div className="row mt-3 mb-5 mx-md-5 mx-md-3 px-md-4 px-lg-4 ">
                {
                    blogs.map(blog => (
                        <div key={blog._id} className="col-sm-12 col-md-6 col-md-6 mt-4 ">
                            <BlogCard blog = {blog} />
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div >
    )
}