import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import Footer from '../partials/Footer/Footer';

export default function SingleStory() {

    const id = useParams();
    console.log(id);
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [description, setDescription] = useState();
    const [coverPicture, setCoverPicture] = useState();
    const [userId, setUserId] = useState();
    const [photo, setPhoto] = useState();


    useEffect(() => {
        getBlogDetail()
        async function getBlogDetail() {
            try {
                let res = await axios.get(`/blogs/single/${id.id}`);
                setTitle(res.data.title);
                setAuthor(res.data.author);
                setDescription(res.data.description);
                setCoverPicture(res.data.coverPicture);
                setUserId(res.data.userId);
                getProfilePhoto();
            }
            catch (error) {
                console.log(error);
            }
        }

    });

    const getProfilePhoto = () => {

        profilePicture()
        async function profilePicture() {
            try {
                let res = await axios.get(`/${userId}/userDetail`);
                setPhoto(res.data.photo);
            }
            catch (error) {
                console.log(error);
            }
        }

    }

    return (
        <div className="container-fluid">
            <div className="row my-5 mx-md-5 mx-lg-5 px-md-5 px-lg-5 ">
                <div className="col mb-5 mx-md-5 mx-lg-5 px-md-5 px-lg-5 d-flex flex-column">
                    <img className="profile-picture rounded-circle mx-auto" src={photo ? `http://localhost:3001/` + photo : "Nothing"} alt="profile" />
                    <h2 className="story-author text-center mt-3">{author}</h2>
                    <h2 className=" mt-3 story-title text-center">{title}</h2>
                    <div className="mt-4 story-description text-center" dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
            </div>
            <Footer />
        </div>
    )

}