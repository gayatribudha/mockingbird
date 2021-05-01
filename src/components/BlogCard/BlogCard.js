import React from 'react'
import cover from '../../assets/images/cover.jpg';
import './BlogCard.css';

export default function BlogCard() {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
                <a href="/blog/title"><img className="cover-picture img-fluid" src={cover} alt="cover" /></a>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8">
                <a href="/blog/title" style={{textDecoration:"none"}}>
                    <h2 className="blog-title mt-2">Inside the city of glass and steels.</h2>
                    <h3 className="blog-author">Shital Agrawal</h3>
                    <p className="blog-description">Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.  </p>
                </a>
            </div>
        </div>
    )
}