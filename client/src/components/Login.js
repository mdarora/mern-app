import React from 'react';
import {Link} from "react-router-dom";
import InputField from "./InputField";
import loginSvg from "../images/login.svg"


const userLogin = async (e) =>{
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:5000/signin",{
            crossDomain:true,
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "email" : "mdarora@md.com",
                "password" : "1213141516",
            }),
        });

        console.log(response);
        const data = await response.json();
        console.log(data, data.status);
        
        
    } catch (error) {
        console.log('Catched error : ', error);
        
    }
};


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
                                        <button onClick={userLogin}>Login</button>
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
