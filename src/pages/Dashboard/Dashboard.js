import React, { useEffect } from 'react'
import '../../assets/css/dashboard.css';
import birdIcon from '../../assets/images/birdIcon.png';
import { useHistory } from 'react-router';
import axios from "axios";;


export default function Dashboard() {

    const routerHistory = useHistory();

    useEffect(() => {
        console.log(localStorage.getItem("user"));
        if (localStorage.getItem("user") === null) {
            routerHistory.push('/beapart');
        }
        // else {
        //     // axios.defaults.headers.common = {
        //     //     'Authorization': localStorage.getItem("user")
        //     // }
        //     axios({
        //             url: "/auth",
        //             method: 'post',
        //             headers: {
        //                 Authorization: localStorage.getItem("user"),
        //             }
        //          })
        //         .then(usr => {
        //             routerHistory.push('/dashboard');
        //         })
        //         .catch(err => {
        //             routerHistory.push('/beapart');
        //         });
        // }
    }, []);

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