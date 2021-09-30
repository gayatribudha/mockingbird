import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

import cover from '../assets/images/cover.jpg';
import Footer from '../partials/Footer/Footer';


export default function SingleBlog() {

    const id = useParams();
    console.log(id);
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [description, setDescription] = useState();
    const [coverPicture, setCoverPicture] = useState();

    useEffect(() => {
        getBlogDetail()
        async function getBlogDetail() {
            try {
                let res = await axios.get(`/blogs/single/${id.id}`);
                setTitle(res.data.title);
                setAuthor(res.data.author);
                setDescription(res.data.description);
                setCoverPicture(res.data.coverPicture);
            }
            catch (error) {
                console.log(error);
            }
        }

    }, []);
    console.log(title);

    return (
        <div className="container-fluid">
            <div className="row my-5 mx-md-5 mx-lg-5 px-md-5 px-lg-5 ">
                <div className="col mb-5 mx-md-5 mx-lg-5 px-md-5 px-lg-5 d-flex flex-column">
                    <img className="cover-picture img-fluid" src={coverPicture ? `http://localhost:3001/` + coverPicture : "Nothing"} alt="cover" style={{ height: "300px", width: "100%" }} />
                    <h2 className="mt-4 blog-title mt-2">{title}</h2>
                    <h3 className="mt-2 blog-author">{author}</h3>
                    <div className="mt-2 mt-md-4 mt-lg-4" dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}