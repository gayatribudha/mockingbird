import React from 'react'
import LandingPage from '../components/LandingPage/LandingPage';
import Footer from '../partials/Footer/Footer';

import '../assets/css/home.css';
import BlogPreview from '../components/BlogPreview/BlogPreview';
import StoryPreview from '../components/StoryPreview/StoryPreview';


export default function Home() {
    return (
        <div className="container-fluid">
            <LandingPage />
            <BlogPreview />
            <StoryPreview />
            <Footer />
        </div>

    )
}