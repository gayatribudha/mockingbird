import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import swal from 'sweetalert';
import { useHistory } from 'react-router'
import { Editor } from '@tinymce/tinymce-react';

import '../../assets/css/dashboard.css';


export default function CreateBlog(userInfo) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
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

    const routerHistory = useHistory();


    const handleSubmit = e => {
        e.preventDefault();
        const data = { title, description, author, category, userId };
        if (data.description === "") {
            data.description = "Blog Yet to write.";
        }
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };
        fetch("/blogs/create-blog", requestOptions)
            .then(response => response.json())
            .then(res => swal({
                title: "Saved!!",
                text: "Saved successfully!",
                icon: "success",
            }).then(function () {
                if (urlCategory.category === "blog") {
                    routerHistory.push('/dashboard/blog');
                } else {
                    routerHistory.push('/dashboard/story');
                }
            }))
            .catch(err => {
                swal("Oops!", "Seems like we couldn't fetch data", "error");
            });
    };

    return (
        <div className="dashboard">
            <div className="row px-3 px-md-5 pt-lg-5">
                <div className="col pt-5 pt-md-5 pt-lg-0">
                    <h2 className="d-blog-sub-title mt-5 mt-md-0 mt-lg-0">{urlCategory.category === 'blog' ? "Create Blog" : "Create Story"}</h2>
                </div>
            </div>
            <div className="row px-3     px-md-0 px-lg-0">
                <div className="col mx-2 mx-md-5 mx-lg-5 my-md-3  create-box">
                    <form onSubmit={handleSubmit}>
                        <div className=" pt-md-3 pt-lg-3 d-lg-flex flex-row">
                            <label className="form-label mt-1 mr-2">Title</label><br />
                            <input required className="requiredField form-field mt-0" type="text" value={title} onChange={onTitleChange}></input><br />



                            <label className="form-label ml-lg-4 mt-1 mr-2">Author</label><br />
                            <input required className="form-field mt-0" type="text" value={author} onChange={onAuthorChange}></input><br />

                            <input hidden className="form-field mt-0" type="text" value={userId}></input><br />
                        </div>
                        <div>
                            <label className="form-label mt-md-4 mt-lg-4">{urlCategory.category === 'blog' ? "Blog" : "Story"}</label> <br />
                            <div>
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
                        </div>
                        <div className="mb-3 px-1 px-md-3 px-lg-3">
                            <button type="submit" className="delete-btn" >Save</button>
                            <Link to={urlCategory.category === "blog" ? "/dashboard/blog" : "/dashboard/story"}><button className="delete-btn ml-2 mt-4 ">Cancel</button></Link>
                        </div>

                    </form>
                </div>

            </div>
        </div >
    )
}