import React, { useEffect, useState } from 'react';
import axios from "axios";
import profile from '../../assets/images/profile.jpg';
import birdIcon from '../../assets/images/birdIcon.png';

import './StoryCard.css';

export default function StoryCard({ story }) {
    const [photo, setPhoto] = useState();
    useEffect(() => {
        profilePicture()
        async function profilePicture() {
            try {
                let res = await axios.get(`/${story.userId}/userDetail`);
                setPhoto(res.data.photo);
            }
            catch (error) {
                console.log(error);
            }
        }

    })
    return (
        <div className="row">
            <div className="col d-flex flex-column">

                <img className="profile-picture rounded-circle mx-auto" src={photo ? `http://localhost:3001/` + photo : "No Photo"} alt="profile" />

                <h2 className=" story-author text-center mt-3">{story.author}</h2>
                <a style={{ textDecoration: "none" }} href="/story/title"><h2 className=" story-title text-center">{story.title}</h2></a>
                <div className="story-description text-center" dangerouslySetInnerHTML={{ __html: story.description }}></div>

                <img className="bird-icon mx-auto" src={birdIcon} alt="bird icon" />
            </div>

        </div>
    )
}