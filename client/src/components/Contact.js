import React from 'react';
import ContactInfoBox from "./ContactInfoBox";

const Contact = () => {
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
                    <form className="contact-form">
                        <div className="row">
                            <div className="col-sm-4 inputs">
                                <input type="text" placeholder="Your name" className="form-control" />
                            </div>
                            <div className="col-sm-4 inputs">
                                <input type="email" placeholder="Your email" className="form-control" />
                            </div>
                            <div className="col-sm-4 inputs">
                                <input type="number" placeholder="Mobile number" className="form-control" />
                            </div>
                            <div className="col-12 mt-4">
                                <textarea className="form-control" name="message" id="message" placeholder="Message"></textarea>
                            </div>
                        </div>
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
