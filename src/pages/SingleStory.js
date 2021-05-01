import React from 'react';
import profile from '../assets/images/profile.jpg';


export default function SingleStory() {
    return (
        <div className="container-fluid">
            <div className="row mt-5 mx-md-5 mx-lg-5 px-md-5 px-lg-5 ">
                <div className="col mx-md-5 mx-lg-5 px-md-5 px-lg-5 d-flex flex-column">
                    <img className="profile-picture rounded-circle mx-auto" src={profile} alt="profile image" />

                    <h2 className="story-author text-center mt-3">Shreywont Khanal</h2>
                    <a style={{ textDecoration: "none" }} href="/story/title"><h2 className=" mt-3 story-title text-center">The only option I has was to stay.</h2></a>
                    <p className=" mt-4 story-description text-center">Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. <br />
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.<br />
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.

</p>
                </div>
            </div>
        </div>
    )

}