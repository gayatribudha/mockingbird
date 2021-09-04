import React, { useState } from 'react'
import Footer from '../partials/Footer/Footer';
import '../assets/css/beAPart.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import axios from "axios";

export default function BeAPart() {

    const routerHistory = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const onEmailChange = e => setEmail(e.target.value);
    const onPasswordChange = e => setPassword(e.target.value);


    const handleSubmit = e => {
        e.preventDefault();
        setErrorEmail(false);
        setErrorPassword(false);

        axios.post("/login", { email, password })
            .then(response => {
                localStorage.setItem('user', response.data.token);
                routerHistory.push('/dashboard');
            })
            .catch(err => {
                console.log(err);

                if (err.response.status === 401) {
                    setErrorPassword(true);
                } else {
                    setErrorPassword(true);
                }
            });
    }

    return (
        <div className="container-fluid">
            <div className="row my-5 pb-5 mx-2 mx-md-5 mx-lg-5 px-md-4 px-lg-4">
                <div className="left-box col-sm-12 col-md-6 col-lg-6 px-sm-3 px-md-5 py-md-5 py-lg-5 d-none d-md-block d-lg-block">
                    <div className="px-3 py-3 px-md-3 px-lg-5 py-md-5 py-lg-5">
                        <h1 className="heading-caption">A take off beyond horizon.</h1>
                        <hr className="white-line" />
                        <h2 className="sub-caption">Here we try not to fit in. We are the Mockingbirds.</h2>
                    </div>

                </div>

                <div className="right-box col-sm-12 col-md-6 col-lg-6 px-sm-2 px-md-4 py-md-5 py-lg-5 ">
                    <div className="px-3 py-3 px-md-3 px-lg-5 py-md-0 py-lg-0">
                        <p>Please enter your username and password to login.</p>
                        <form onSubmit={handleSubmit}>
                            <input type="text" className="login-input" placeholder="Username" value={email} onChange={onEmailChange} /><br />
                            <div className="error ml-3 mt-2 " style={{ display: errorEmail ? "block" : "none" }} >Wrong email.</div>

                            <input type="password" className="login-input mt-3" placeholder="Password" value={password} onChange={onPasswordChange} /><br />
                            <div className="error ml-3 mt-2 " style={{ display: errorPassword ? "block" : "none" }}>Wrong Email or Password.</div>

                            <button className="login-button mt-4" type="submit">LOGIN</button>
                        </form>
                        <p className="bottom-text mt-4">Don't know each other yet?
                        <Link to="/register"><button className="login-link-button"><span className="signup">Sign Up</span></button></Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}