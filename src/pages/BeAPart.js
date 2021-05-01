import React, { Component } from 'react'
import Footer from '../partials/Footer/Footer';
import '../assets/css/beAPart.css';

export default class BeAPart extends Component {
    constructor() {
        super();
        this.state = {
            showLogin: true,
            showRegister: false,
        }
    }
    render() {
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
                    {
                        this.state.showLogin ?
                            <div className="right-box col-sm-12 col-md-6 col-lg-6 px-sm-3 px-md-5 py-md-5 py-lg-5 ">
                                <div className="px-3 py-3 px-md-5 px-lg-5 py-md-0 py-lg-0">
                                    <p>Please enter your username and password to login.</p>
                                    <form>
                                        <input type="text" className="login-input" placeholder="Username" /><br />
                                        <input type="password" className="login-input mt-3" placeholder="Password" /><br />

                                        <button className="login-button mt-4" type="submit">LOGIN</button>
                                    </form>
                                    <p className="bottom-text mt-4">Don't know each other yet?
                                    <button className="login-link-button" onClick={() => { { this.setState({ showLogin: !this.state.showLogin }) }; this.setState({ showRegister: !this.setState.showRegister }) }}><span className="signup">Sign Up</span></button>
                                    </p>
                                </div>
                            </div>
                            : null
                    }
                    {
                        this.state.showRegister ?
                            <div className="right-box col-sm-12 col-md-6 col-lg-6 px-sm-3 px-md-5 py-md-5 py-lg-5 ">
                                <div className="px-3 px-md-5 px-lg-5 py-md-0 py-lg-0">
                                    <p>Let's know each other.</p>
                                    <form>
                                        <input type="text" className="login-input" placeholder="Full Name" /><br />
                                        <input type="email" className="login-input mt-3" placeholder="Email" /><br />
                                        <input type="password" className="login-input mt-3" placeholder="Password" /><br />
                                        <input type="password" className="login-input mt-3" placeholder="Confirm Password" /><br />

                                        <button className="login-button mt-4" type="submit">REGISTER</button>
                                    </form>
                                    <p className="bottom-text mt-4">Already have an account?
                                <button className="login-link-button" onClick={() => { { this.setState({ showLogin: !this.state.showLogin }) }; this.setState({ showRegister: this.setState.showRegister }) }}><span className="signup">Log In</span></button>
                                    </p>
                                </div>
                            </div>
                            : null
                    }

                </div>
                <Footer />
            </div>
        )
    }
}