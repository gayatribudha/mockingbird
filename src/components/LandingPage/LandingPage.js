import React from 'react'
import bg from '../../assets/images/bg.png';
import downArrow from '../../assets/images/downArrow.png';

import './LandingPage.css';


export default function LandingPage() {
    return (
        
            <div className="row mx-md-5 mx-lg-5 px-md-1 px-lg-4">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="home-text mt-5">
                        <h1 className="pt-5">Hey, how've you been?</h1>
                        <h4 className="mt-3"><span>Mockingbird</span> is a space<br />    for when we all need to be <br />heard and to listen. </h4>
                    </div>
                    <div className="mt-5">
                        <p className="learn-unlearn">Way to Learn and Unlearn.
                        <img className="ml-3" src={downArrow} alt="down arrow" />
                        </p>

                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-md-6 d-none d-md-block d-lg-block">
                    <img className="float-right" src={bg} alt="background image" />
                </div>

            </div>
    )
}