import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import InputField from "./InputField";
import regSvg from "../images/register.svg";
import loader from "../images/Spinner-1s-200px.svg";

const Register = ({isLoggedin}) => {
    const history = useHistory();
    if(isLoggedin){
        history.push("/");
    }

    const [user, setUser] = useState({
        name:"", email:"", phone:"", work:"", gender:"gender", password:"", cpassword:""
    });
    const [resultMsg, setresultMsg] = useState("");

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user, [name] : value});
    }

    const registerUser = async (e) => {
        e.preventDefault();
        const registerLoader = document.getElementById("register-loader");
        const {name, email, phone, work, gender, password, cpassword} = user;
        
        try {
            setresultMsg("");
            registerLoader.hidden = false;
            const res = await fetch("http://localhost:5000/register", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({name, email, phone, work, gender, password, cpassword}),
            });
            
            const result = await res.json();

            if(result.message){
                registerLoader.hidden = true;
                setresultMsg(result.message);
                document.getElementById("result-msg").classList.add("text-success");
                document.getElementById("result-msg").classList.remove("text-danger");
                setTimeout(() =>{
                    history.push("/otpverification");
                }, 2000);
            } else {
                registerLoader.hidden = true;
                setresultMsg(result.error);
                document.getElementById("result-msg").classList.remove("text-success");
                document.getElementById("result-msg").classList.add("text-danger");
            }
        } catch (error) {
            registerLoader.hidden = true;
            setresultMsg("Something went wrong !");
            document.getElementById("result-msg").classList.remove("text-success");
            document.getElementById("result-msg").classList.add("text-danger");
        }
    };

    return (
    <>
        <section className="register">
            <div className="container">
                <div className="reg-box">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="reg-form-area">
                                <h4>Register</h4>
                                <form method="POST" onSubmit={registerUser} className="reg-form">
                                    <InputField name="name" id="name" type="text" icon="bi bi-person-fill" change={handleInputs} value={user.name} place="Your Name" />

                                    <InputField name="email" id="email" type="email" icon="bi bi-envelope-fill" change={handleInputs} value={user.email} place="Your E-mail" />

                                    <InputField name="phone" id="number" type="number" icon="bi bi-phone-fill" change={handleInputs} value={user.number} place="Mobile Number" />

                                    <InputField name="work" id="work" type="text" icon="bi bi-briefcase-fill" change={handleInputs} value={user.work} place="Your Profession" />

                                    <div className="field">
                                        <label htmlFor="gender">
                                            <i className="bi bi-gender-ambiguous"></i>
                                        </label>
                                        <select name="gender" id="gender" onChange={handleInputs} value={user.gender} required>
                                            <option value="gender" disabled>Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </div>
                                    
                                    <InputField name="password" id="password" type="password" icon="bi bi-lock-fill" change={handleInputs} value={user.password} place="Your password" />
                                    
                                    <InputField name="cpassword" id="cpassword" type="password" icon="bi bi-lock-fill" change={handleInputs} value={user.cpassword} place="Confirm your password" />

                                    <p id="result-msg" className="text-success">{resultMsg}
                                        <img src={loader} alt="Loading" width="30" id="register-loader" hidden/>
                                    </p>

                                    <div className="form-btn">
                                        <button type="submit">Get OTP</button>
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
