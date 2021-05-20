import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = ({isLoggedin}) => {
    
    const NavLinks = () =>{
        if (isLoggedin){
            return (
            <>
                <li className="nav-item">
                    <NavLink className="nav-link" exact={true} to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/logout">Logout</NavLink>
                </li>
            </>
            )
        } else {
            return (
            <>
                <li className="nav-item">
                    <NavLink className="nav-link" exact={true} to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="login">Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                </li>
            </>
            )
        }
    }

    return (
    <>
        <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><b>Mern <span className="back-logo">App</span></b></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <NavLinks />
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Navbar
