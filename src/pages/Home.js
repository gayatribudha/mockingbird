import React from 'react'
import LandingPage from '../components/LandingPage/LandingPage';
import BlogCard from '../components/BlogCard/BlogCard';
import StoryCard from '../components/StoryCard/StoryCard';
import Footer from '../partials/Footer/Footer';



import '../assets/css/home.css';


export default function Home() {
    return (
        <div className="container-fluid">
            <section className="landing-section">
                <LandingPage />
            </section>
            <section className="blog-section" id="blog-section">
                <div className="row mt-5 pt-5 mx-md-5 mx-lg-5 px-md-4 px-lg-4">
                    <div className="col">
                        <div className="row">
                            <div className="d-none d-md-block d-lg-block col-md-5 col-lg-5">
                                <hr className="hr-line" />
                            </div>
                            <div className="col-md-2">
                                <h1 className="text-center d-block title">Blogs</h1>
                            </div>
                            <div className="col-md-5 col-lg-5">
                                <hr className="hr-line" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mt-2">
                                <p className="caption text-center">We write so that you know it earlier.</p>
                            </div>

                        </div>
                        <div className="row my-4">
                            {
                                [1, 2, 3, 4].map(n => (
                                    <div key={n} className="col-sm-12 col-md-6 col-md-6 mt-4 ">
                                        <BlogCard />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
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
            <Footer />
        </div>

    )
}