import React from 'react';
import {Link} from "react-router-dom";
import InputField from "./InputField";
import loginSvg from "../images/login.svg"

const Login = () => {
    return (
        <>
        <section className="login">
            <div className="container">
                <div className="login-box">
                    <div className="row">

                        <div className="col-sm-6">
                            <div className="login-side-img">
                                <figure className="text-center">
                                    <img src={loginSvg} alt="Register" />
                                </figure>
                                <p>don't have an account ? | <Link to="/register">Register here</Link> </p>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="login-form-area">
                                <h4>Login</h4>
                                <form className="login-form">

                                    <InputField id="email" type="email" icon="bi bi-envelope-fill" place="Your E-mail" />
                                    
                                    <InputField id="password" type="password" icon="bi bi-lock-fill" place="Your password" />

                                    <div className="form-btn">
                                        <button type="submit">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Login
