import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import InputField from "./InputField";
import loginSvg from "../images/login.svg";
import loader from "../images/Spinner-1s-200px.svg";


const Login = ({setIsLoggedin}) => {

    const history = useHistory();

    const [Luser, setLUser] = useState({
        email:"", password:""
    });
    const [resultMsg, setresultMsg] = useState("");


    const handleLogin = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setLUser({...Luser, [name] : value});
    }

    const loginUser = async (e) =>{
        e.preventDefault();
        const loginLoader = document.getElementById("login-loader");
        const {email, password} = Luser;
        try {
            setresultMsg("");
            loginLoader.hidden = false;
            const response = await fetch("http://localhost:5000/signin",{
                method : "POST",
                credentials: 'include',
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({ email, password}),
            });
    
            const result = await response.json();
            
            if(result.message){
                setIsLoggedin(true);
                history.push("/");
            } else if (result.error) {
                loginLoader.hidden = true;
                setresultMsg(result.error);
                document.getElementById("result-msg").classList.remove("text-success");
                document.getElementById("result-msg").classList.add("text-danger");
            }
            else {
                loginLoader.hidden = true;
                setresultMsg("Something went wrong!");
                document.getElementById("result-msg").classList.remove("text-success");
                document.getElementById("result-msg").classList.add("text-danger");
            }
            
            
        } catch (error) {
            console.log('Catched error : ', error);
            loginLoader.hidden = true;
            setresultMsg("Something went wrong!");
            document.getElementById("result-msg").classList.remove("text-success");
            document.getElementById("result-msg").classList.add("text-danger");
        }
    };


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
                                <form onSubmit={loginUser} className="login-form">

                                    <InputField id="email" name="email" type="email" icon="bi bi-envelope-fill" change={handleLogin} value={Luser.email} place="Your E-mail" />
                                    
                                    <InputField id="password" name="password" type="password" icon="bi bi-lock-fill" change={handleLogin} value={Luser.password} place="Your password" />

                                    <p id="result-msg" className="text-success">{resultMsg}
                                        <img src={loader} alt="Loading" width="30" id="login-loader" hidden/>
                                    </p>

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
