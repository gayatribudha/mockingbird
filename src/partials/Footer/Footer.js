import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

import './Footer.css';
import logo from '../../assets/images/logo.png';
import telephone from '../../assets/images/telephone.png';
import mail from '../../assets/images/mail.png';
import address from '../../assets/images/address.png';
import fb from '../../assets/images/fb.png';
import insta from '../../assets/images/insta.png';
import tweeter from '../../assets/images/tweeter.png';





export default function Footer() {

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_obj57eu', 'template_t0vkr4w', form.current, 'user_tQgKJeEFrEQVUVbbZELAz')
            .then((result) => {
                // console.log(result.text);
                swal({
                    title: "Sent!!",
                    text: "Thank you for reaching to us.",
                    icon: "success"
                });
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="container-fluid mr-md-0 mr-lg-0 pr-md-0 pr-lg-0" id="footer">
            <div className="ml-md-5 ml-lg-5 pl-md-2 pl-lg-2">
                <div className="title ml-2">Fly Further</div>
            </div>
            <div className="row ml-md-5 ml-lg-5 pl-md-2 pl-lg-2 flex-column-reverse flex-md-row flex-lg-row">
                <div className="col-sm-12 col-md-4 col-lg-4 ">
                    <div className="row">

                        <div className="col">
                            <div className="mt-4">
                                <h2>Be a part of Mockingbird.</h2>
                                <a href="/beapart"><button className="beapart-button mt-2">Be a part</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-5 col-md-5 col-lg-5">
                            <div>
                                <h3>Quick Links</h3>
                                <p className="footer-text my-0">Blog</p>
                                <p className="footer-text my-0">Story</p>
                                <p className="footer-text">Be a Part</p>
                            </div>
                        </div>
                        <div className="col-sm-7 col-md-7 col-lg-7" >
                            <h3 className="mt-0">Contacts</h3>
                            <p className="footer-text my-0">
                                <img className="mr-2" src={telephone} alt="telephone" />+977 01-234234</p>
                            <p className="footer-text my-0">
                                <img className="mr-2" src={mail} alt="mail" />mockingbird@gmail.com</p>
                            <p className="footer-text">
                                <img className="mr-2" src={address} alt="address" />Kathmandu, Nepal</p>

                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-sm-5 col-md-5 col-lg-5">
                            <div>
                                <img className="footer-logo" src={logo} alt="logo" />
                                <p className="footer-caption mt-0">A take off beyond horizon.
                                Here we try not to fit in.
                                    We are the mockingbirds.</p>
                            </div>
                        </div>
                        <div className="col-sm-7 col-md-7 col-lg-7">
                            <h3 className="mr-4 mt-2">Find Us On</h3>
                            <img className="mr-4" src={fb} alt="fb" />
                            <img className="mr-4" src={insta} alt="insta" />
                            <img className="mr-4" src={tweeter} alt="tweeter" />
                        </div>
                    </div>
                </div >
                <div className="col-sm-12 col-md-8 col-lg-8 mr-md-0 mr-lg-0 pr-sm-0 pr-md-0 pr-lg-0">
                    <form className="query-form" ref={form} onSubmit={sendEmail}>
                        <div className="mx-md-5 mx-lg-5 px-md-5 px-lg-5 py-md-5 py-lg-5 py-2">
                            <div className="mx-3 mr-md-5 mx-lg-5 px-md-3 px-lg-3">
                                <h3 className="form-title">We are open to your queries.</h3>
                                <p className="form-text">Feel free to send us if you have any. We make sure your
                            information remains confidential.</p>
                            </div>
                            <div className="mx-3 mr-md-5 mx-lg-5 px-md-3 px-lg-3">
                                <input required type="text" className="form-input" placeholder="Name" name="name" /><br />
                                <input required type="email" className="form-input mt-4" placeholder="Email" name="email" /> <br />
                                <textarea required className="text-area form-input mt-4" placeholder="Query" name="query" /> <br />
                                <button className="form-button mt-4" type="submit">SEND</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    )
}