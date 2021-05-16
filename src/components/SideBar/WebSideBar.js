import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import pp from '../../assets/images/pp.jpg';
import birdIcon from '../../assets/images/birdIcon.png';
import $ from 'jquery';

import './SideBar.css';

$(document).ready(function () {

    $('#phone-sidebarCollapse').on('click', function () {
        $('#phone-sidebar').toggleClass('active');
    });

});


export default class WebSideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar float-left sidebar px-3  d-none d-md-block d-lg-block">

                    <div className="px-3">
                        <NavLink to="/dashboard"><img className="mt-4" src={logo} alt="logo" /></NavLink>

                        <div className="mt-2 text-center">
                            <img className="user_photo rounded-circle" src={pp} alt="profile-picture" />
                            <p className="sb-user-name mt-1 mb-0 text-center">Rita Ora</p>
                            <p className="sb-user-email" >ritaora@gmail.com</p>
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
                                    <svg className="icon mr-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 2H18V14H3.17L2 15.17V2ZM2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0H2ZM4 10H12V12H4V10ZM4 7H16V9H4V7ZM4 4H16V6H4V4Z" fill="#4A4A4A" />
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

                                <NavLink activeClassName="sidebar-menu_active" className="sidebar-nav-link" to="/dashboard/logout">
                                    <svg className="icon mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z" fill="#4A4A4A" />
                                    </svg>
                            Logout</NavLink>
                            </li>

                        </ul>
                        <hr className="sb-hr-line" />
                        <div className="text-center">
                            <img className="mt-3" src={birdIcon} alt="birdIcon" />
                        </div>
                    </div>
                </nav>






                <div className="wrapper d-block d-md-none d-lg-none position-absolute">
                    <div className="" id="content">
                        <nav className="navbar navbar-expand-lg phone-navbar">
                            <div className="container-fluid">

                                <button className="phone-sidebar-toggler" id="phone-sidebarCollapse">
                                    <svg width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="1" x2="34" y2="1" stroke="#730875" stroke-width="2" />
                                        <line y1="11" x2="34" y2="11" stroke="#730875" stroke-width="2" />
                                        <line y1="22" x2="34" y2="22" stroke="#730875" stroke-width="2" />
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
                                <img className="user_photo rounded-circle" src={pp} alt="profile-picture" />
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
                                    <svg className="icon mr-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 2H18V14H3.17L2 15.17V2ZM2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0H2ZM4 10H12V12H4V10ZM4 7H16V9H4V7ZM4 4H16V6H4V4Z" fill="#4A4A4A" />
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

                                <NavLink activeClassName="sidebar-menu_active" className="sidebar-nav-link" to="/dashboard/logout">
                                    <svg className="icon mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z" fill="#4A4A4A" />
                                    </svg>
                                Logout
                                </NavLink>
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

}
