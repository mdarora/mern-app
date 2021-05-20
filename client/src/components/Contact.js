import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import ContactInfoBox from "./ContactInfoBox";

const Contact = () => {
    const history = useHistory();

    const [user, setUser] = useState({
        id:"", name:"", email:"", phone:""
    });
    const [message, setMessage] = useState("");
    const [messageResult, setmessageResult] = useState("");

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const getData = async () =>{
        try {
            const response = await fetch("http://localhost:5000/getdata",{
                method : "GET",
                headers: {
                    // Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials: 'include',
            });

            const result = await response.json();

            if (result.error){
                history.push("/login");
                return;
            } else if (result.user){
                const {_id, name, email, phone} = result.user;
                setUser({id: _id, name, email, phone});
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getData();
    },[]);

    const sendMessage = async (e) =>{
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/contact",{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify({
                    id:user.id, name:user.name, email:user.email, phone:user.phone, message
                })
            });
            const result = await response.json();
            if(result.message){
                setmessageResult(result.message);
                setMessage("");
                document.getElementById("result-msg").classList.add("text-success");
                document.getElementById("result-msg").classList.remove("text-danger");
            } else if (result.error) {
                setmessageResult(result.error);
                document.getElementById("result-msg").classList.remove("text-success");
                document.getElementById("result-msg").classList.add("text-danger");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <>
    <section className="contact">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10 col-md-12 offset-lg-1 offset-md-0">
                    <div className="row">
                        <div className="col-md-4 col-sm-8 mx-auto mt-3">
                            <ContactInfoBox icon="bi bi-phone-fill" heading="Phone" text="+91 9191 827 391" />
                        </div>
                        <div className="col-md-4 col-sm-8 mx-auto mt-3">
                            <ContactInfoBox icon="bi bi-envelope-fill" heading="E-mail" text="Contact@mdarora.com" />
                        </div>
                        <div className="col-md-4 col-sm-8 mx-auto mt-3">
                            <ContactInfoBox icon="bi bi-pin-map-fill" heading="Address" text="Panipat Haryana, India" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="contact-form-box">
                    <h4>Get in touch</h4>
                    <form method="POST" onSubmit={sendMessage} className="contact-form">
                        <div className="row">
                            <div className="col-sm-4 inputs">
                                <input type="text" value={user.name} placeholder="Your name" className="form-control" readOnly/>
                            </div>
                            <div className="col-sm-4 inputs">
                                <input type="email" value={user.email} placeholder="Your email" className="form-control" readOnly/>
                            </div>
                            <div className="col-sm-4 inputs">
                                <input type="number" value={user.phone} placeholder="Mobile number" className="form-control" readOnly/>
                            </div>
                            <div className="col-12 mt-4">
                                <textarea className="form-control" name="message" id="message" placeholder="Message" value={message} onChange={handleMessage}></textarea>
                            </div>
                        </div>
                        <p id="result-msg" className="text-center mb-0 mt-3">{messageResult}</p>
                        <div className="form-btn">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </section>
        
    </>
    )
}

export default Contact
