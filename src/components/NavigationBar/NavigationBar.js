import React from 'react'
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import './NavigationBar.css';


export default function NavigationBar() {
  return (
    <div className="container-fluid px-md-5 px-lg-5">
      <nav className="navbar navbar-expand-lg navbar-light d-flex flex-sm-row">
        <NavLink to="/"><img className="mt-4" src={logo} alt="logo" /></NavLink>
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <svg width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1" x2="34" y2="1" stroke="#730875" stroke-width="2" />
            <line y1="11" x2="34" y2="11" stroke="#730875" stroke-width="2" />
            <line y1="22" x2="34" y2="22" stroke="#730875" stroke-width="2" />
          </svg>

        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-2">
              <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink activeClassName="menu_active" className="nav-link" to="/blogs">Blog</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink activeClassName="menu_active" className="nav-link" to="/story">Story</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink activeClassName="menu_active" className="nav-link" to="/beapart">Be A Part</NavLink>
            </li>
            <li className="nav-item mx-2">
              <a href="#footer"><button className="query-button mt-2">Query</button></a>
            </li>
          </ul>
        </div>
      </nav>
    </div >
  )
}