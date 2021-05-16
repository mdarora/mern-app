import React from 'react';
import {Link} from "react-router-dom";
import regSvg from "../images/register.svg";

const Register = () => {
    return (
    <>
        <section className="register">
            <div className="container">
                <div className="reg-box">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="reg-form-area">
                                <h4>Register</h4>
                                <form className="reg-form">
                                    <div className="field">
                                        <label htmlFor="name">
                                            <i className="bi bi-person-fill"></i>
                                        </label>
                                        <input type="text" id="name" placeholder="Your Name" autoComplete="off" required />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="email">
                                            <i className="bi bi-envelope-fill"></i>
                                        </label>
                                        <input type="email" id="email" placeholder="Your E-mail" autoComplete="off" required/>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="number">
                                            <i className="bi bi-phone-fill"></i>
                                        </label>
                                        <input type="number" id="number" placeholder="Mobile Number" autoComplete="off" required/>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="work">
                                            <i className="bi bi-briefcase-fill"></i>
                                        </label>
                                        <input type="text" id="work" placeholder="Your Profession" autoComplete="off" required/>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="gender">
                                            <i className="bi bi-gender-ambiguous"></i>
                                        </label>
                                        <select name="gender" id="gender" autoComplete="off" required>
                                            <option disabled>Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="password">
                                            <i className="bi bi-lock-fill"></i>
                                        </label>
                                        <input type="password" id="password" placeholder="Your password" autoComplete="off" required/>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="cpassword">
                                            <i className="bi bi-lock-fill"></i>
                                        </label>
                                        <input type="password" id="cpassword" placeholder="Confirm your password" autoComplete="off" required/>
                                    </div>

                                    <div className="register-btn">
                                        <button type="submit">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="register-side-img">
                                <figure className="text-center">
                                    <img src={regSvg} alt="Register" />
                                </figure>
                                <p>Already registered ? | <Link className="login-link" to="/login">Login here</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Register
