import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";


import { Editor } from '@tinymce/tinymce-react';

import '../../assets/css/dashboard.css';



export default function CreateBlog() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");


    const onTitleChange = e => setTitle(e.target.value);
    const onDescriptionChange = (content, editor) => {
        const htmlRemovedContent = content.replace(/<[^>]*>/g, '');
        setDescription(htmlRemovedContent);
    }
    const onAuthorChange = e => setAuthor(e.target.value);


    const handleSubmit = e => {
        e.preventDefault();
        const data = { title, description, author };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };
        fetch("/blogs/create-blog", requestOptions)
            .then(response => response.json())
            .then(res => console.log(res));
    };

    return (
        <div className="dashboard">
            <div className="row px-3 px-md-5 pt-lg-5">
                <div className="col pt-5 pt-md-5 pt-lg-0">
                    <h2 className="d-blog-sub-title mt-5 mt-md-0 mt-lg-0">Create Blog</h2>
                </div>
            </div>
            <div className="row px-3     px-md-0 px-lg-0">
                <div className="col mx-2 mx-md-5 mx-lg-5 my-md-3  create-box">
                    <form>
                        <div className="px-1 py-1 px-md-3 px-lg-3 pt-md-3 pt-lg-3">
                            <label className="form-label">Blog Title</label><br />
                            <input className="form-field mt-0" type="text" value={title} onChange={onTitleChange} required></input><br />

                            <label className="form-label">Author</label><br />
                            <input className="form-field mt-0" type="text" value={author} onChange={onAuthorChange} required></input><br />

                            <label className="form-label mt-3">Blog</label> <br />
                            <Editor
                                apiKey='ae8usjpq17flqzzs5cmkknz85iso0czxaieq68evxqpqg377'
                                value={description}
                                init={{
                                    height: 500,
                                    menubar: false
                                }}
                                onEditorChange={onDescriptionChange}
                            />
                            {/* <Editor
                                onEditorChange={onDescriptionChange} required
                                value={description}
                                textareaName='description'
                                apiKey='ae8usjpq17flqzzs5cmkknz85iso0czxaieq68evxqpqg377'
                                onInit={(evt, editor) => editorRef.current = editor}
                                initialValue="Write your blog here :)"                                init={{
                                    height: 300,
                                    menubar: false,
                                    toolbar: 'undo redo | formatselect | ' +
                                        'bold italic | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            /> */}


                            {/* <textarea rows="10" className="mt-0" type="text" style={{ width: "100%" }} value={description} onChange={onDescriptionChange}></textarea> */}

                        </div>
                        <div className="mb-3 px-1 px-md-3 px-lg-3">
                            <button type="submit" className="delete-btn" onClick={handleSubmit}>Save</button>
                            <Link to="/dashboard/blog"><button className="delete-btn ml-2 mt-4 ">Cancel</button></Link>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}