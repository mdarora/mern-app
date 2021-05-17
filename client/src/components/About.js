import React from 'react';
import pp from "../images/profile-photo.jpg";

const About = () => {
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
                                <h5 className="name">MD Arora</h5>
                                <p className="prof">Web Developer</p>
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
                                    <input type="text" id="id" value="9ydbd7dgebddg9ed8db" readOnly/>
                                </div>

                                <div className="line">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" value="MD Arora" readOnly/>
                                </div>

                                <div className="line">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" id="email" value="mdarora@12.com" readOnly/>
                                </div>

                                <div className="line">
                                    <label htmlFor="phone">Mobile Number</label>
                                    <input type="text" id="phone" value="+91 9191 828 291" readOnly/>
                                </div>
                                
                                <div className="line">
                                    <label htmlFor="work">Profession</label>
                                    <input type="text" id="work" value="Web Developer" readOnly/>
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
