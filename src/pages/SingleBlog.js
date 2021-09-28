import React from 'react';
import cover from '../assets/images/cover.jpg';
import Footer from '../partials/Footer/Footer';


export default function SingleStory() {
    return (
        <div className="container-fluid">
            <div className="row my-5 mx-md-5 mx-lg-5 px-md-5 px-lg-5 ">
                <div className="col mb-5 mx-md-5 mx-lg-5 px-md-5 px-lg-5 d-flex flex-column">
                    <img className="cover-picture img-fluid" src={cover} alt="cover" style={{height:"300px", width: "100%"}}/>
                    <h2 className="mt-4 blog-title mt-2">Inside the city of glass and steels.</h2>
                    <h3 className="mt-2 blog-author">Shital Agrawal</h3>
                    <p className="mt-2 mt-md-4 mt-lg-4">Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. <br />
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.<br />
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                     </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}