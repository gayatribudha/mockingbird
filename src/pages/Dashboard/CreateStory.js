import React, { useRef } from 'react';
import { Link } from "react-router-dom";

import { Editor } from '@tinymce/tinymce-react';


import '../../assets/css/dashboard.css';


export default function CreateStory() {

    const editorRef = useRef(null);

    return (
        <div className="dashboard">
            <div className="row px-3 px-md-5 pt-lg-5">
                <div className="col pt-5 pt-md-5 pt-lg-0">
                    <h2 className="d-blog-sub-title mt-5 mt-md-0 mt-lg-0">Create Story</h2>
                </div>
            </div>
            <div className="row px-3     px-md-0 px-lg-0">
                <div className="col mx-2 mx-md-5 mx-lg-5 my-md-3  create-box">
                    <form>
                        <div className="px-1 py-1 px-md-3 px-lg-3 pt-md-3 pt-lg-3">
                            <label className="form-label">Story Title</label><br />
                            <input className="form-field mt-0" type="text"></input><br />
                            <label className="form-label mt-3">Story</label> <br />


                            <Editor
                                textareaName='description'
                                apiKey='ae8usjpq17flqzzs5cmkknz85iso0czxaieq68evxqpqg377'
                                onInit={(evt, editor) => editorRef.current = editor}
                                initialValue="<p>Write your story here :)</p>"
                                init={{
                                    height: 300,
                                    menubar: false,
                                    toolbar: 'undo redo | formatselect | ' +
                                        'bold italic | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            />


                            {/* <textarea rows="10" className="mt-0" type="text" style={{ width: "100%" }}></textarea> */}
                        </div>
                        <div className="mb-3 px-1 px-md-3 px-lg-3">
                            <button type="submit" className="delete-btn">Save</button>
                            <Link to="/dashboard/story"><button className="delete-btn ml-2 mt-4 ">Cancel</button></Link>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}