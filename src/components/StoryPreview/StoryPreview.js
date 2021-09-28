import React from 'react';
import StoryCard from '../StoryCard/StoryCard';


export default function StoryPreview() {
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
                            <p className="caption text-center">We share so that it makes you stronger.</p>
                        </div>

                    </div>
                    <div className="row my-4 px-md-5 px-lg-5">
                        {
                            [1, 2].map(n => (
                                <div className="col-sm-12 col-md-6 col-lg-6 px-md-5 px-lg-5">
                                    <StoryCard />
                                </div>
                            ))
                        }

                    </div>
                </div>

            </div>
        </section>
    )
};