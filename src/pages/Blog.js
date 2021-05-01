import React from 'react'

import BlogCard from '../components/BlogCard/BlogCard';
import Footer from '../partials/Footer/Footer';


export default function Blog() {
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
                    [1, 2, 3, 4, 5, 6].map(n => (
                        <div key={n} className="col-sm-12 col-md-6 col-md-6 mt-4 ">
                            <BlogCard />
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div >
    )
}