import React from 'react'
import profile from '../../assets/images/profile.jpg';
import birdIcon from '../../assets/images/birdIcon.png';

import './StoryCard.css';

export default function StoryCard() {
    return (
        <div className="row">
            <div className="col d-flex flex-column">

                <img className="profile-picture rounded-circle mx-auto" src={profile} alt="profile image" />

                <h2 className=" story-author text-center mt-3">Shreywont Khanal</h2>
                <a style={{textDecoration: "none"}} href="/story/title"><h2 className=" story-title text-center">The only option I has was to stay.</h2></a>
                <p className=" story-description text-center">Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.

                </p>
                <img className="bird-icon mx-auto" src={birdIcon} alt="bird icon" />
            </div>

        </div>
    )
}