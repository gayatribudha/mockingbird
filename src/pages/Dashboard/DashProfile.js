import React from 'react';
import { Link } from 'react-router-dom';

import pp from '../../assets/images/pp.jpg';
import '../../assets/css/dashboard.css';


export default function DashProfile() {
    return (
        <div className="dashboard">
            <div className="container" id="">
                <div className="row pt-5 pt-md-5 pt-lg-5    ">
                    <div className="col pl-5 mx-mt-2 mx-lg-5 px-md-2 px-lg-5 mt-5 mt-md-5 mt-lg-5 pt-md-5 pt-lg-5 d-flex flex-column flex-md-row  flex-lg-row">
                        <img src={pp} alt="profile-picture" style={{ borderRadius: "50px", width: "100px", height: "100px" }} />
                        <div className=" pl-1 ml-md-5 l-lg-5 mt-2 mt-md-4 mt-lg-4">
                            <p className="p-user-name mb-0 pb-0">Rita Ora</p>
                            <p className="p-user-email mt-0 pt-0">ritaora@gmail.com< br /></p>
                            <p className="p-bio">Velit porro qui quo autem aut porro recusandae a. Quam molestias deserunt qui. Atque quia est corporis ut inventore sint illo</p>
                            <p className="p-contact">Kathmandu, Nepal <br />
                            +977 9844874635</p>

                            <button className="delete-btn">Update Profile</button>
                            <button className="delete-btn mt-2 mt-md-2 mt-lg-0  ml-md-2 ml-lg-2">Change Password</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}