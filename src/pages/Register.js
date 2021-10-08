import React, { useState } from 'react'
import Footer from '../partials/Footer/Footer';
import '../assets/css/beAPart.css';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useHistory } from 'react-router'



export default function Register() {

    const routerHistory = useHistory();

    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // For error check
    const [passwordmatch, setPasswordMatch] = useState(true)
    const [errorFullname, setErrorFullname] = useState(false)
    const [errorUsername, setErrorUsername] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorEmailExist, setErrorEmailExist] = useState(false)

    const onFullnameChange = e => setFullname(e.target.value);
    const onUsernameChange = e => setUsername(e.target.value);
    const onEmailChange = e => setEmail(e.target.value);
    const onPasswordChange = e => setPassword(e.target.value);
    const onConfirmPasswordChange = e => setConfirmPassword(e.target.value);


    const handleSubmit = e => {
        e.preventDefault();
        const data = { fullname, username, email, password };
        if (data.fullname === "" || data.fullname.length < 3) {
            setErrorFullname(true);

            setErrorUsername(false);
            setErrorEmail(false);
            setErrorPassword(false);
            setErrorEmailExist(false);

            setPasswordMatch(true);

        } else if (data.username === "" || data.username.length < 3) {
            setErrorUsername(true);

            setErrorFullname(false);
            setErrorEmail(false);
            setErrorPassword(false);
            setErrorEmailExist(false);


            setPasswordMatch(true);

        } else if (data.email === "") {
            setErrorEmail(true);

            setErrorFullname(false);
            setErrorUsername(false);
            setErrorPassword(false);
            setErrorEmailExist(false);

            setPasswordMatch(true);

        } else if (data.password === "" || data.password.length < 8) {
            setErrorPassword(true);

            setErrorFullname(false);
            setErrorUsername(false);
            setErrorEmail(false);
            setErrorEmailExist(false);

            setPasswordMatch(true);

        } else if (data.password !== confirmPassword) {
            setPasswordMatch(false);

            setErrorPassword(false);
            setErrorFullname(false);
            setErrorUsername(false);
            setErrorEmail(false);
            setErrorEmailExist(false);

        } else {
            setErrorPassword(false);
            setErrorFullname(false);
            setErrorUsername(false);
            setErrorEmail(false);
            setErrorEmailExist(false);

            setPasswordMatch(true)
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            };
            fetch("/register", requestOptions)
                .then(response => {
                    if (response.ok) {
                        swal({
                            title: "Registered!!",
                            text: "Thank you for joining Mockingbird.",
                            icon: "success"
                        });
                        // routerHistory.push('/beapart');
                    } else {
                        
                        throw new Error(setErrorEmailExist(true));
                    }
                })
                .catch(err => {
                    console.log(err)
                    
                });
        }
    };

    return (
        <div className="container-fluid">
            <div className="row my-5 pb-5 mx-2 mx-md-5 mx-lg-5 px-md-4 px-lg-4">
                <div className="left-box col-sm-12 col-md-6 col-lg-6 px-sm-3 px-md-5 py-md-5 py-lg-5 d-none d-md-block d-lg-block">
                    <div className="px-3 py-3 px-md-5 px-lg-5 py-md-5 py-lg-5">
                        <h1 className="heading-caption">A take off beyond horizon.</h1>
                        <hr className="white-line" />
                        <h2 className="sub-caption">Here we try not to fit in. We are the Mockingbirds.</h2>
                    </div>

                </div>
                <div className="right-box col-sm-12 col-md-6 col-lg-6 px-sm-3 px-md-5 py-md-5 py-lg-5 ">
                    <div className="px-3 px-md-5 px-lg-5 py-md-0 py-lg-0">
                        <p>Let's know each other.</p>
                        <form onSubmit={handleSubmit}>
                            <input type="text" className="login-input" placeholder="Full Name" value={fullname} onChange={onFullnameChange} /><br />
                            <div className="error ml-3 mt-2 " style={{ display: errorFullname ? "block" : "none" }}>Fullname is required.</div>

                            <input type="text" className="login-input mt-3" placeholder="Username" value={username} onChange={onUsernameChange} /><br />
                            <div className="error ml-3 mt-2 " style={{ display: errorUsername ? "block" : "none" }}>Username is required.</div>

                            <input type="email" className="login-input mt-3" placeholder="Email" value={email} onChange={onEmailChange} /><br />
                            <div className="error ml-3 mt-2 " style={{ display: errorEmail ? "block" : "none" }}>Email is required.</div>
                            <div className="error ml-3 mt-2 " style={{ display: errorEmailExist ? "block" : "none" }}>Email already exists.</div>

                            <input type="password" className="login-input mt-3" placeholder="Password" value={password} onChange={onPasswordChange} /><br />
                            <div className="error ml-3 mt-2 " style={{ display: errorPassword ? "block" : "none" }}>Password is required with at least of 8 digit.</div>

                            <input type="password" className="login-input mt-3" placeholder="Confirm Password" required style={{ borderColor: passwordmatch ? "" : "red" }} value={confirmPassword} onChange={onConfirmPasswordChange} /><br />
                            <div className="error ml-3 mt-2 " style={{ display: passwordmatch ? "none" : "block" }}>Password and Confirm Password don't match.</div>

                            <button className="login-button mt-4" type="submit">REGISTER</button>
                        </form>
                        <p className="bottom-text mt-4">Already have an account?
                                <Link to="/beapart"><button className="login-link-button"><span className="signup">Log In</span></button></Link>
                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )

}