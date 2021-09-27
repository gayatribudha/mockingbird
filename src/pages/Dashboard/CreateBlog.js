import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import swal from 'sweetalert';
import { useHistory } from 'react-router'
import { Editor } from '@tinymce/tinymce-react';
import axios from "axios";

import '../../assets/css/dashboard.css';


export default function CreateBlog(userInfo) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [coverPicture, setCoverPicture] = useState("");
    const [userId, setUserId] = useState("");


    const urlCategory = useParams();


    console.log(category.category);

    useEffect(() => {
        setUserId(userInfo.userInfo._id);
        if (urlCategory.category === "blog") {
            setCategory('blog');
        } else {
            setCategory('story');
        }
    })

    const onTitleChange = e => setTitle(e.target.value);
    const onDescriptionChange = (content, editor) => {
        setDescription(content);
    }
    const onAuthorChange = e => setAuthor(e.target.value);
    const onCoverPictureChange = e => setCoverPicture(e.target.files[0]);

    const routerHistory = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        if (description === "") {
            setDescription = "Blog Yet to write.";
        }
        console.log(coverPicture);
        let formData = new FormData();
        formData.append('coverPicture', coverPicture);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('author', author);
        formData.append('category', category);
        formData.append('userId', userId);

        const config = { headers: { 'Content-Type': 'multipart/form-data' } }

        axios.post("/blogs/create-blog", formData, config)
            .then(res => {
                swal({
                    title: "Saved",
                    text: "Created Successfully!",
                    icon: "success",
                })
            }).then(function () {

                if (urlCategory.category === "blog") {
                    routerHistory.push('/dashboard/blog');
                } else {
                    routerHistory.push('/dashboard/story');
                }
            })
            .catch(err => {
                console.log(err);
                swal("Oops!", "Seems like we couldn't update your profile", "error");
            });

        // fetch("/blogs/create-blog", requestOptions)
        //     .then(response => response.json())
        //     .then(res => swal({
        //         title: "Saved!!",
        //         text: "Saved successfully!",
        //         icon: "success",
        //     }).then(function () {
        //         if (urlCategory.category === "blog") {
        //             routerHistory.push('/dashboard/blog');
        //         } else {
        //             routerHistory.push('/dashboard/story');
        //         }
        //     }))
        //     .catch(err => {
        //         swal("Oops!", "Seems like we couldn't fetch data", "error");
        //     });

    };

    return (
        <div className="dashboard">
            <div className="row px-3 px-md-5 pt-lg-5">
                <div className="col pt-5 pt-md-5 pt-lg-0">
                    <h2 className="d-blog-sub-title mt-5 mt-md-0 mt-lg-0">{urlCategory.category === 'blog' ? "Create Blog" : "Create Story"}</h2>
                </div>
            </div>
            <div className="row px-3 px-md-0 px-lg-0">
                <div className="col mx-2 mx-md-5 mx-lg-5 my-md-3  create-box">
                    <form onSubmit={handleSubmit}>
                        <div className=" pt-md-2 pt-lg-2 d-lg-flex flex-row">
                            <input hidden className="form-field mt-0" type="text" value={userId}></input><br />

                            <label className="form-label mt-1 mr-2">Title</label><br />
                            <input required className="requiredField form-field mt-0" type="text" value={title} onChange={onTitleChange}></input><br />

                            <label className="form-label ml-lg-4 mt-1 mr-2">Author</label><br />
                            <input required className="form-field mt-0" type="text" value={author} onChange={onAuthorChange}></input><br />

                        </div>
                        <div>
                            <label className="form-label mt-4 mr-lg-3">Cover Picture</label>
                            <div className="profile-upload-btn-wrap d-inline">
                                <label id="blog-cover-picture" className="profile-upload-btn" htmlFor="upload">
                                    Upload from here
                                    <svg className="float-right" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#a09f9f"><g><rect fill="none" height="24" width="24" /></g><g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z" /></g></svg>
                                </label>
                                <input type="file" id="upload" name="photo" accept=".png, .jpg, .jpeg" onChange={onCoverPictureChange} />
                            </div>
                            <br />
                            <label className="form-label">{urlCategory.category === 'blog' ? "Blog" : "Story"}</label> <br />
                            <Editor required
                                apiKey='ae8usjpq17flqzzs5cmkknz85iso0czxaieq68evxqpqg377'
                                value={description}
                                init={{
                                    height: 300,
                                    menubar: false
                                }}
                                onEditorChange={onDescriptionChange}
                            />
                        </div>
                        <div className=" px-md-3 px-lg-3">
                            <button type="submit" className="delete-btn" >Save</button>
                            <Link to={urlCategory.category === "blog" ? "/dashboard/blog" : "/dashboard/story"}><button className="delete-btn ml-2 mt-2 ">Cancel</button></Link>
                        </div>

                    </form>
                </div>

            </div>
        </div >
    )
}