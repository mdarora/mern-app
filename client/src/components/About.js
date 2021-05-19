import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import pp from "../images/profile-photo.jpg";

const About = () => {
    const history = useHistory();

    const [user, setUser] = useState({
        id:"", name:"", email:"", phone:"", gender:"", work:""
    });

    const getAbout = async () =>{
        try {
            const response = await fetch("http://localhost:5000/about",{
                method : "GET",
                headers: {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials: 'include',
            });

            const result = await response.json();

            if (result.error){
                history.push("/login");
                return;
            } else if (result.user){
                const {_id, name, email, phone, gender, work} = result.user;
                setUser({id : _id, name, email, phone, gender, work});
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() =>{
        getAbout();
    },[]);

    return (
    <>
    <section className="profile">
        <div className="container">
            <div className="profile-box">
                <div className="row">

                    <div className="col-sm-3 img-links">
                        <div className="profile-photo">
                            <img src={pp} alt="ProfilePhoto" />
                        </div>
                        <div className="work-links">
                            <h6>Work links</h6>
                        </div>
                    </div>

                    <div className="col-sm-9">
                        <div className="upper-part">
                            <div className="profile-highlight">
                                <h5 className="name">{user.name}</h5>
                                <p className="prof">{user.work}</p>
                            </div>
                            <div className="edit-btn">
                                <button> <i className="bi bi-pencil-square"></i> Edit Profile</button>
                            </div>
                        </div>
                        <div className="all-details">
                            <h5 className="profile">Profile info</h5>
                            <form>
                                
                                <div className="line">
                                    <label htmlFor="id">User ID</label>
                                    <input type="text" id="id" value={user.id} readOnly/>
                                </div>

                                <div className="line">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" value={user.name} readOnly/>
                                </div>

                                <div className="line">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" id="email" value={user.email} readOnly/>
                                </div>

                                <div className="line">
                                    <label htmlFor="phone">Mobile Number</label>
                                    <input type="text" id="phone" value={user.phone} readOnly/>
                                </div>
                                
                                <div className="line">
                                    <label htmlFor="gender">Gender</label>
                                    <input type="text" id="gender" value={user.gender} readOnly/>
                                </div>
                                
                                <div className="line">
                                    <label htmlFor="work">Profession</label>
                                    <input type="text" id="work" value={user.work} readOnly/>
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

export default About
