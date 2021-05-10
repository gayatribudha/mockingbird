import React from 'react';


export default function Dashboard() {
    return (
        <div className="position-relative">

            <div className="ml-sm-0 ml-md-5 ml-md-5 pl-md-5 pl-lg-5">
                <div className="row ml-sm-0 ml-md-5 ml-lg-5 pl-md-5 pl-md-5 d-flex flex-row">
                    <div className="col-sm-3 col-md-6 col-lg-6 pl-md-5 mt-5 pt-2">
                        <h2 className>My Blogs</h2>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-6 mt-5 pt-2">
                        <button className="float-right pr-sm-0  pr-md-5 pr-lg-5">Create New Blog</button>
                    </div>
                </div>
            </div>
        </div>
    )
}