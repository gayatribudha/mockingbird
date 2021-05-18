import React from 'react'
import '../../assets/css/dashboard.css';
import SideBar from '../../components/SideBar/SideBar';
import birdIcon from '../../assets/images/birdIcon.png';


export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboard-content">

                <h1 className=" dash-title title text-center ">Hey Mockingbird!!</h1>
                <h2>Write and share your own Blogs and Stories.</h2>
                <img className="mt-5" src={birdIcon} alt="bird-icon" />

            </div>
        </div>

    )
}