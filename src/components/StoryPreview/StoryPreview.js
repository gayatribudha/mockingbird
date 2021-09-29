import React, { useState, useEffect } from 'react';
import axios from "axios";
import StoryCard from '../StoryCard/StoryCard';


export default function StoryPreview() {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        storiesList()
        async function storiesList() {
            try {
                let res = await axios.get(`/blogs/storyPreview`);
                setStories(res.data);
            }
            catch (error) {
                console.log(error);
            }
        }
    }, []);

    return (
        <section className="story-section">
            <div className="row mt-5 pt-5 mx-md-5 mx-lg-5 px-md-4 px-lg-4">
                <div className="col">
                    <div className="row">
                        <div className="d-none d-md-block d-lg-block col-md-5 col-lg-5">
                            <hr className="hr-line" />
                        </div>
                        <div className="col-md-2">
                            <h1 className="text-center d-block title">Stories</h1>
                        </div>
                        <div className="col-md-5 col-lg-5">
                            <hr className="hr-line" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <p className="caption text-center">Listen to the whisper of the Heart</p>
                        </div>

                    </div>
                    <div className="row my-4 px-md-5 px-lg-5">

                        {
                            stories.slice(0, 2).map(story => (
                                <div className="col-sm-12 col-md-6 col-lg-6 px-md-5 px-lg-5">
                                    <StoryCard story={story} />
                                </div>
                            ))
                        }

                    </div>
                </div>

            </div>
        </section>
    )
};