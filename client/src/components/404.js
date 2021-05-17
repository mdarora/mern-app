import React from 'react';
import {Link} from "react-router-dom";
import errImage from "../images/404.svg";

const ErrorPage = () => {
    return (
    <>
        <section className="error">
            <div className="container">
                <div className="error-box  text-center">
                    <div className="error-img">
                        <figure>
                            <img src={errImage} alt="Error 404" />
                        </figure>
                    </div>
                    <div className="error-text">
                        <h5>Page not found!</h5>
                        <p>The page you are looking for is not available at the moment.</p>
                    </div>
                    <div className="form-btn back-btn">
                        <Link to="/">Back to Home</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default ErrorPage
