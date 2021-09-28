import React from 'react'
import downArrow from '../../assets/images/downArrow.png';
import { Link } from "react-scroll";

import './LandingPage.css';


export default function LandingPage() {
    return (
        <section className="landing-section">
            <div className="container-fluid">
                <div className="background mx-md-5 mx-lg-5 px-md-5" >
                    <div className="home-text mt-5">
                        <h1 className="main-text pt-5">Hey, how've you been?</h1>
                        <h4 className="home-caption mt-3"><span className="mockingbird">Mockingbird</span> is a space<br />    for when we all need to be <br />heard and to listen. </h4>
                    </div>
                    <div className="mt-5 py-md-2 py-lg-2 ">
                        <p className="learn-unlearn">Way to Learn and Unlearn.
                        <Link activeClass="active"
                                to="blog-section"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <img className="ml-3" src={downArrow} alt="down arrow" />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}