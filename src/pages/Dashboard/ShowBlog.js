import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router';
import axios from "axios";


import '../../assets/css/dashboard.css';


export default function ShowBlog() {

    // console.log(`blogs/${id.blogId} `);

    const id = useParams();

    const [blog, setBlog] = useState({});
    const [hasError, setErrors] = useState(false);

    const routerHistory = useHistory();

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`/blogs/single/${id.blogId}`);
            res.json()
                .then(res => setBlog(res))
                .catch(err => setErrors(err));
        }
        fetchData();
    }, []);

    function handleDelete() {
        console.log("clicked");
        console.log(id.blogId);
        fetch(`/blogs/${id.blogId}/delete`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(res => swal({
                text: "Successfully deleted.",
                icon: "success",
                button: "Ok"
            }).then(function () {

                if (blog.category === "blog") {
                    routerHistory.push("/dashboard/blog");
                } else {
                    routerHistory.push("/dashboard/story");
                }
                window.location.reload();


            }))
    }

    function confirmDelete() {
        Swal.fire({
            text: "Are you sure you want to delete this blog?",
            icon: "warning",
            showDenyButton: true,
            confirmButtonText: `Yes`,
            denyButtonText: `No`,
            confirmButtonColor: '#ba14bd',
            denyButtonColor: 'grey',
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }

        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete();
            } else {
                if (blog.category === "blog") {
                    routerHistory.push(`/dashboard/blog/${id.blogId}`);
                } else {
                    routerHistory.push(`/dashboard/story/${id.blogId}`);

                }
            }
        })
    }

    return (
        <div className="dashboard">

            <div className="row px-3 px-md-5 px-lg-5 pt-lg-5">
                <div className="col-sm-12 col-md-5 col-lg-5 pt-5 pt-md-5 pt-lg-0">
                    <Link to={blog.category === 'blog' ? "/dashboard/blog" : "/dashboard/story"}>
                        <p className="mt-5 mt-md-0 mt-lg-0" style={{ fontSize: "16px" }}>
                            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" /></svg>
                            {blog.category === 'blog' ? 'Back to Blog page' : 'Back to Story Page'}
                        </p>
                    </Link>
                </div>
                <div className="col-sm-12 col-md-7 col-lg-7 pt-5 pt-md-5 pt-lg-0 d-none d-sm-none d-md-block d-lg-block">
                    <div className="mt-5 mt-md-0 mt-lg-0 float-right">
                        <Link to={`/dashboard/${blog.category}/update/${blog._id}`}>
                            <button className="delete-btn">Update</button>
                        </Link>


                        <Link to={blog.category === 'blog' ? '/dashboard/blog' : '/dashboard/story'}>
                            <button type='submit' className="ml-2 delete-btn" onClick={confirmDelete}>Delete</button>
                        </Link>


                    </div>
                </div>
            </div>
            <div className="row px-3 px-md-5 px-lg-5 mt-2 mt-md-4 mt-lg-4">
                <div className="col m-2 p-3 mb-2" style={{ backgroundColor: "white" }}>
                    <h3 className="blog-title text-center mt-2 ">
                        {blog.title}

                    </h3>
                    {/* <div>
                        <img src={blog.coverPicture ? `http://localhost:3001/` + blog.coverPicture : "Nothing"} alt="profile" style={{height: "100%", height: "150px"}}/>
                    </div> */}
                    <div className="" style={{ height: "380px", overflowY: "scroll" }}>
                        <div>
                            <img className="float-right mr-3" src={blog.coverPicture ? `http://localhost:3001/` + blog.coverPicture : "Nothing"} alt="profile" style={{height: "100%", height: "150px"}}/>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: blog.description }}></div>

                    </div>
                </div>
            </div>

            {/* For mobile view */}
            <div className="row my-2 mx-5 pb-5  d-block d-md-none d-lg-none">
                <div className="col ">
                    <Link to={`/dashboard/${blog.category}/update/${blog._id}`}>
                        <button className="delete-btn">Update</button>
                    </Link>
                    <Link to={blog.category === 'blog' ? '/dashboard/blog' : '/dashboard/story'}>
                        <button type="submit" className="ml-2 delete-btn" onClick={confirmDelete}>Delete</button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

