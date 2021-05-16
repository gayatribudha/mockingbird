import React from 'react';

import '../../assets/css/dashboard.css';


export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="row px-3 px-md-5 px-ld-5 pt-5">
                <div className="col">

                    <h1 className="title">Blogs</h1>
                </div>
                <div className="col pl-md-5">
                    <button>Create New Blog</button>
                </div>
            </div>
        </div>
    )
}