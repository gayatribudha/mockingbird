import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router';
import { FaSearch } from "react-icons/fa";


import ToggleBtn from '../../components/ToggleBtn/ToggleBtn';
import '../../assets/css/dashboard.css';

export default function DashBlog() {
    const [blogs, setBlogs] = useState([]);

    const routerHistory = useHistory();

    useEffect(() => {
        let JWTToken = localStorage.getItem('user');
        dashboard();
        async function dashboard() {
            try {
                let res = await axios.get('/blogs', { headers: { "Authorization": `Bearer ${JWTToken}` } });
                setBlogs(res.data);
            }
            catch (error) {
                console.log(error);
                routerHistory.push('/beapart');
            }
        }
    }, []);

    const [searchItem, setSearchItem] = useState();

    const handleSearch = (e) => {
        setSearchItem(e.target.value);
    }

    return (
        <div className="dashboard">
            <div className="row px-3 px-md-5 pt-lg-5 flex flex-row">
                <div className="col-3 pt-5 pt-md-5 pt-lg-0">

                    <h1 className="title create-blog-title mt-5 mt-md-0 mt-lg-0">Blogs</h1>
                </div>
                <div className="col-9 pt-5 pt-md-5 pt-lg-0">
                    <div className="mt-5 mt-md-0 mt-lg-0">
                        <Link to="/dashboard/create-blog">
                            <button className="create-blog-btn float-right">
                                Create New Blog
                                <svg className="position-absolute mx-2 mx-md-2 mx-lg-2 mt-md-1 mt-lg-1" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.9542 9.08C19.4876 9.08 19.9142 9.25333 20.2342 9.6C20.5809 9.92 20.7542 10.3467 20.7542 10.88C20.7542 11.3867 20.5809 11.8 20.2342 12.12C19.9142 12.44 19.4876 12.6 18.9542 12.6H12.7942V18.72C12.7942 19.3067 12.6076 19.8 12.2342 20.2C11.8609 20.5733 11.3676 20.76 10.7542 20.76C10.1676 20.76 9.67422 20.5733 9.27422 20.2C8.90089 19.8 8.71422 19.3067 8.71422 18.72V12.6H2.59422C2.08755 12.6 1.66089 12.4267 1.31422 12.08C0.967552 11.7333 0.794219 11.3067 0.794219 10.8C0.794219 10.2933 0.954219 9.88 1.27422 9.56C1.62089 9.24 2.06089 9.08 2.59422 9.08H8.71422V2.56C8.71422 1.97333 8.90089 1.49333 9.27422 1.12C9.67422 0.746666 10.1676 0.559999 10.7542 0.559999C11.3676 0.559999 11.8609 0.746666 12.2342 1.12C12.6076 1.49333 12.7942 1.97333 12.7942 2.56V9.08H18.9542Z" fill="white" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row px-4 px-md-5 px-lg-5  mt-4 mt-md-4 mt-lg-4">
                <div className="col">

                    <div className="d-flex float-right">
                        <input className="search-bar" type="text" placeholder="Search.." name="search" onChange={handleSearch} />
                        <div className="search-icon-container">
                            <div className="" style={{ marginLeft: "5px", position: "absolute" }}>
                                <svg stroke="currentColor" fill="#ba14bd" stroke-width="0" viewBox="0 0 512 512" height="1em"
                                    width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 
                                    44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 
                                    6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 
                                    336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="row px-4 px-md-5 px-lg-5  mt-4 mt-md-4 mt-lg-4 blogs-box">

                {
                    blogs.filter(blog => blog.title.includes(searchItem)).map(blog => (
                        <div key={blog._id} className="col-sm-12 col-md-5 col-lg-5 ml-md-4 ml-lg-4  mt-3 d-blog-card">
                            <Link to={`/dashboard/blog/${blog._id}`} style={{ textDecoration: "none" }}>
                                <div className="pt-3">
                                    <h3 className="blog-title">{blog.title}</h3>
                                    <div className="blog-para" dangerouslySetInnerHTML={{ __html: blog.description }}></div>
                                </div>
                            </Link>
                            <ToggleBtn id={blog._id} checkedStatus={blog.publish} /> 
                        </div>

                    ))
                }


                {/* {blogs.length > 0 ? (
                    <>
                        <Pagination
                            data={blogs}
                            RenderComponent={Blog}
                            title="Blogs"
                            pageLimit={3}
                            dataLimit={4}
                        />
                    </>
                ) : (
                    <h1>No Posts to display</h1>
                )} */}

            </div>
        </div>
    );
}


