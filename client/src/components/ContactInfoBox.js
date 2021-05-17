import React from 'react'

const ContactInfoBox = (props) => {
    return (
    <>
        <div className="contact-info-box">
            <figure>
                <i className={props.icon}></i>
            </figure>
            <div className="contact-info-text">
                <h6>{props.heading}</h6>
                <p>{props.text}</p>
            </div>
        </div>
    </>
    )
}

export default ContactInfoBox
