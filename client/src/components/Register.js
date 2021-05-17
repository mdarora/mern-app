import React from 'react';
import {Link} from "react-router-dom";
import InputField from "./InputField";
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
                                    <InputField id="name" type="text" icon="bi bi-person-fill" place="Your Name" />

                                    <InputField id="email" type="email" icon="bi bi-envelope-fill" place="Your E-mail" />

                                    <InputField id="number" type="number" icon="bi bi-phone-fill" place="Mobile Number" />

                                    <InputField id="work" type="text" icon="bi bi-briefcase-fill" place="Your Profession" />

                                    <div className="field">
                                        <label htmlFor="gender">
                                            <i className="bi bi-gender-ambiguous"></i>
                                        </label>
                                        <select name="gender" id="gender" autoComplete="off" defaultValue="gender" required>
                                            <option value="gender" disabled>Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </div>
                                    
                                    <InputField id="password" type="password" icon="bi bi-lock-fill" place="Your password" />
                                    
                                    <InputField id="cpassword" type="password" icon="bi bi-lock-fill" place="Confirm your password" />

                                    <div className="form-btn">
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
