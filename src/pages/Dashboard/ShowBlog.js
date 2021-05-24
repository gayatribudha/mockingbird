import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/css/dashboard.css';


export default function ShowBlog() {
    return (
        <div className="dashboard">
            <div className="row px-3 px-md-5 px-lg-5 pt-lg-5">
                <div className="col-sm-12 col-md-5 col-lg-5 pt-5 pt-md-5 pt-lg-0">
                    <Link to="/dashboard/blog">
                        <p className="mt-5 mt-md-0 mt-lg-0" style={{ fontSize: "16px" }}>
                            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" /></svg>
                            Back to Blog page
                        </p>
                    </Link>
                </div>
                <div className="col-sm-12 col-md-7 col-lg-7 pt-5 pt-md-5 pt-lg-0 d-none d-sm-none d-md-block d-lg-block">
                    <div className="mt-5 mt-md-0 mt-lg-0 float-right">
                        <button className="delete-btn">Update</button>

                        <button className="ml-2 delete-btn">Delete</button>

                    </div>
                </div>
            </div>
            <div className="row px-3 px-md-5 px-lg-5 mt-2 mt-md-4 mt-lg-4">
                <div className="col m-2 p-3 mb-2" style={{ backgroundColor: "white" }}>
                    <h3 className="blog-title text-center mt-2 ">Inside the city of glass and stell.</h3>
                    <div className="" style={{height: "380px", overflowY:"scroll"}}>
                        <p className="m-3">Velit porro qui quo autem aut porro recusandae a. Quam molestias deserunt qu. Velit porro qui quo autem aut porro recusandae a. Quam molestias deserunt qu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                        Velit porro qui quo autem aut porro recusandae a. Quam molestias deserunt qu.Velit porro qui quo autem aut porro recusandae a. Quam molestias deserunt qu.
                        <br />
                    Velit porro qui quo autem aut porro recusandae a. Quam molestias deserunt qu. Velit porro qui quo autem aut porro recusandae a. Quam molestias deserunt qu.Velit porro qui quo autem aut porro recusandae a. Quam molestias deserunt qu.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Velit porro qui quo autem aut porro recusandae a. Quam molestias deserunt qu. Velit porro qui quo autem aut porro recusandae a. Quam molestias deserunt qu.Velit porro qui quo autem aut porro recusandae a. Quam molestias deserunt qu.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Velit porro qui quo autem aut porro recusandae a. Quam molestias deserunt qu. Velit porro qui quo autem aut porro recusandae a. Quam molestias deserunt qu.Velit porro qui quo autem aut porro recusandae a. Quam molestias deserunt qu.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Velit porro qui quo autem aut porro recusandae a. Quam molestias deserunt qu. Velit porro qui quo autem aut porro recusandae a. Quam molestias deserunt qu.Velit porro qui quo autem aut porro recusandae a. Quam molestias deserunt qu.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row my-2 mx-5 pb-5  d-block d-md-block d-lg-none">
                <div className="col ">
                    <button className="delete-btn">Update</button>
                    <button className="ml-2 delete-btn">Delete</button>

                </div>
            </div>
        </div>
    )
}