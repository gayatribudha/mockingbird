import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { useHistory } from 'react-router'

import logo from '../../assets/images/logo.png';
import pp from '../../assets/images/pp.jpg';
import defaultPP from '../../assets/images/defaultPP.png';

import birdIcon from '../../assets/images/birdIcon.png';
import $ from 'jquery';

import './SideBar.css';

$(document).ready(function () {

    $('#phone-sidebarCollapse').on('click', function () {
        $('#phone-sidebar').toggleClass('active');
    });

});



export default function WebSideBar({ userInfo}) {

    const routerHistory = useHistory();

    const [userDetail, setUserDetail] = useState("");
    const [erros, setErrors] = useState("");

    useEffect(() => {
        fetchData();
        async function fetchData() {
            const res = await fetch(`/${userInfo._id}/userDetail`);
            res.json()
                .then(res => {
                    setUserDetail(res);
                })
                .catch(err => setErrors(err));
        }
    }, [])

    return (
        <div>
            {/* Navbar for web view */}
            <nav className="navbar float-left sidebar px-3  d-none d-md-block d-lg-block">

                <div className="px-3">
                    <NavLink to="/dashboard"><img className="mt-4" src={logo} alt="logo" /></NavLink>

                    <div className="mt-2 text-center">
                        <img className="user_photo rounded-circle" src={ userDetail.photo ? `http://localhost:3001/` + userDetail.photo : defaultPP} alt="profile" />
                        <p className="sb-user-name mt-1 mb-0 text-center"> {userDetail.fullname} </p>
                        <p className="sb-user-email" >{userDetail.email}</p>
                        <hr className="sb-hr-line" />
                    </div>
                    <ul className="sidebar-nav-items">

                        <li className="sidebar-nav-item">

                            <NavLink activeClassName="sidebar-menu_active" className="sidebar-nav-link" to="/dashboard/blog">
                                <svg className="icon mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.99994 4V5.38C8.16994 5.05 7.27994 4.88 6.38994 4.88C4.59994 4.88 2.80994 5.56 1.43994 6.93L4.76994 10.26H5.87994V11.37C6.73994 12.23 7.85994 12.68 8.98994 12.73V15H5.99994V18C5.99994 19.1 6.89994 20 7.99994 20H17.9999C19.6599 20 20.9999 18.66 20.9999 17V4H8.99994ZM7.88994 10.41V8.26H5.60994L4.56994 7.22C5.13994 7 5.75994 6.88 6.38994 6.88C7.72994 6.88 8.97994 7.4 9.92994 8.34L11.3399 9.75L11.1399 9.95C10.6299 10.46 9.94994 10.75 9.21994 10.75C8.74994 10.75 8.28994 10.63 7.88994 10.41ZM18.9999 17C18.9999 17.55 18.5499 18 17.9999 18C17.4499 18 16.9999 17.55 16.9999 17V15H10.9999V12.41C11.5699 12.18 12.0999 11.84 12.5599 11.38L12.7599 11.18L15.5899 14H16.9999V12.59L10.9999 6.62V6H18.9999V17Z" fill="#4A4A4A" />
                                </svg>
                                Blog
                            </NavLink>

                        </li>
                        <li className="sidebar-nav-item mt-2">

                            <NavLink activeClassName="sidebar-menu_active" className="sidebar-nav-link" to="/dashboard/story">
                                <svg className="icon mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.47 5.2C22 4.96 21.51 4.76 21 4.59V16.62C19.86 16.21 18.69 16 17.5 16C15.6 16 13.72 16.54 12 17.58V5.48C10.38 4.55 8.51 4 6.5 4C4.71 4 3.02 4.44 1.53 5.2C1.2 5.36 1 5.71 1 6.08V18.16C1 18.74 1.47 19.15 2 19.15C2.16 19.15 2.32 19.11 2.48 19.03C3.69 18.4 5.05 18 6.5 18C8.57 18 10.48 18.82 12 20C13.52 18.82 15.43 18 17.5 18C18.95 18 20.31 18.4 21.52 19.04C21.68 19.12 21.84 19.16 22 19.16C22.52 19.16 23 18.75 23 18.17V6.08C23 5.71 22.8 5.36 22.47 5.2ZM10 16.62C8.86 16.21 7.69 16 6.5 16C5.31 16 4.14 16.21 3 16.62V6.71C4.11 6.24 5.28 6 6.5 6C7.7 6 8.89 6.25 10 6.72V16.62ZM19 0.5L14 5.5V15L19 10.5V0.5Z" fill="#4A4A4A" />
                                </svg>
                                    Story
                            </NavLink>
                        </li>
                        <li className="sidebar-nav-item mt-2">

                            <NavLink activeClassName="sidebar-menu_active" className="sidebar-nav-link" to="/dashboard/profile">
                                <svg className="icon mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 16C14.7 16 17.8 17.29 18 18H6C6.23 17.28 9.31 16 12 16ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#4A4A4A" />
                                </svg>
                            Profile</NavLink>
                        </li>
                        <li className="sidebar-nav-item mt-2">

                            <NavLink className="sidebar-nav-link" to="/">
                                <svg className="icon mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z" fill="#4A4A4A" />
                                </svg>
                            Go to Website
                            </NavLink>
                        </li>
                        <li className="sidebar-nav-item mt-2">

                            <Link onClick={() => {
                                localStorage.removeItem("user");    
                                routerHistory.push('/beapart');
                            }} className="sidebar-nav-link" to="">
                                <svg className="icon mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z" fill="#4A4A4A" />
                                </svg>
                            Logout</Link>
                        </li>

                    </ul>
                    <hr className="sb-hr-line" />
                    <div className="text-center">
                        <img className="mt-3" src={birdIcon} alt="birdIcon" />
                    </div>
                </div>
            </nav>





            {/* Navbar for mobile view  */}
            <div className="wrapper d-block d-md-none d-lg-none position-absolute">
                <div className="" id="content">
                    <nav className="navbar navbar-expand-lg phone-navbar">
                        <div className="container-fluid">

                            <button className="phone-sidebar-toggler" id="phone-sidebarCollapse">
                                <svg width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="1" x2="34" y2="1" stroke="#730875" strokeWidth="2" />
                                    <line y1="11" x2="34" y2="11" stroke="#730875" strokeWidth="2" />
                                    <line y1="22" x2="34" y2="22" stroke="#730875" strokeWidth="2" />
                                </svg>
                            </button>
                            <img className="mt-3" src={birdIcon} alt="birdIcon" />
                        </div>
                    </nav>
                </div>
                <nav className="sticky-top" id="phone-sidebar">
                    <div className="">
                        <NavLink to="/dashboard"><img src={logo} alt="logo" /></NavLink>

                        <div className=" text-center">
                            <img className="user_photo rounded-circle" src={pp} alt="profile" />
                            <p className="sb-user-name mb-0 text-center">Rita Ora</p>
                            <p className="sb-user-email" >ritaora@gmail.com</p>
                            <hr className="sb-hr-line" />
                        </div>
                    </div>

                    <ul className="sidebar-nav-items">
                        <li className="sidebar-nav-item">

                            <NavLink activeClassName="sidebar-menu_active" className="sidebar-nav-link" to="/dashboard/blog">
                                <svg className="icon mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.99994 4V5.38C8.16994 5.05 7.27994 4.88 6.38994 4.88C4.59994 4.88 2.80994 5.56 1.43994 6.93L4.76994 10.26H5.87994V11.37C6.73994 12.23 7.85994 12.68 8.98994 12.73V15H5.99994V18C5.99994 19.1 6.89994 20 7.99994 20H17.9999C19.6599 20 20.9999 18.66 20.9999 17V4H8.99994ZM7.88994 10.41V8.26H5.60994L4.56994 7.22C5.13994 7 5.75994 6.88 6.38994 6.88C7.72994 6.88 8.97994 7.4 9.92994 8.34L11.3399 9.75L11.1399 9.95C10.6299 10.46 9.94994 10.75 9.21994 10.75C8.74994 10.75 8.28994 10.63 7.88994 10.41ZM18.9999 17C18.9999 17.55 18.5499 18 17.9999 18C17.4499 18 16.9999 17.55 16.9999 17V15H10.9999V12.41C11.5699 12.18 12.0999 11.84 12.5599 11.38L12.7599 11.18L15.5899 14H16.9999V12.59L10.9999 6.62V6H18.9999V17Z" fill="#4A4A4A" />
                                </svg>
                                    Blog
                                </NavLink>

                        </li>
                        <li className="sidebar-nav-item">

                            <NavLink activeClassName="sidebar-menu_active" className="sidebar-nav-link" to="/dashboard/story">
                                <svg className="icon mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.47 5.2C22 4.96 21.51 4.76 21 4.59V16.62C19.86 16.21 18.69 16 17.5 16C15.6 16 13.72 16.54 12 17.58V5.48C10.38 4.55 8.51 4 6.5 4C4.71 4 3.02 4.44 1.53 5.2C1.2 5.36 1 5.71 1 6.08V18.16C1 18.74 1.47 19.15 2 19.15C2.16 19.15 2.32 19.11 2.48 19.03C3.69 18.4 5.05 18 6.5 18C8.57 18 10.48 18.82 12 20C13.52 18.82 15.43 18 17.5 18C18.95 18 20.31 18.4 21.52 19.04C21.68 19.12 21.84 19.16 22 19.16C22.52 19.16 23 18.75 23 18.17V6.08C23 5.71 22.8 5.36 22.47 5.2ZM10 16.62C8.86 16.21 7.69 16 6.5 16C5.31 16 4.14 16.21 3 16.62V6.71C4.11 6.24 5.28 6 6.5 6C7.7 6 8.89 6.25 10 6.72V16.62ZM19 0.5L14 5.5V15L19 10.5V0.5Z" fill="#4A4A4A" />
                                </svg>
                                Story
                                </NavLink>
                        </li>
                        <li className="sidebar-nav-item ">

                            <NavLink activeClassName="sidebar-menu_active" className="sidebar-nav-link" to="/dashboard/profile">
                                <svg className="icon mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 16C14.7 16 17.8 17.29 18 18H6C6.23 17.28 9.31 16 12 16ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#4A4A4A" />
                                </svg>
                                Profile
                                </NavLink>
                        </li>
                        <li className="sidebar-nav-item">

                            <NavLink className="sidebar-nav-link" to="/">
                                <svg className="icon mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z" fill="#4A4A4A" />
                                </svg>
                                Go to Website
                                </NavLink>
                        </li>
                        <li className="sidebar-nav-item">

                            <Link onClick={() => {
                                localStorage.removeItem("user");
                                routerHistory.push('/beapart');
                            }} className="sidebar-nav-link" to="">
                                <svg className="icon mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z" fill="#4A4A4A" />
                                </svg>
                                Logout
                                </Link>
                        </li>
                    </ul>
                    <hr className="sb-hr-line" />
                    <div className="text-center">
                        <img className="mt-3" src={birdIcon} alt="birdIcon" />
                    </div>
                </nav>

            </div>
        </div>



    )


}
