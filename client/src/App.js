import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/404";
import Logout from "./components/Logout";
import VerifyOtp from "./components/VerifyOtp";
import "./App.scss";

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(()=>{
    let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if(cookieValue){
      setIsLoggedin(true);
    }
  }, []);



  return (
    <>
      <Navbar isLoggedin={isLoggedin}/>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>

      <Route path="/about">
        <About></About>
      </Route>

      <Route path="/contact">
        <Contact></Contact>
      </Route>

      <Route path="/register">
        <Register isLoggedin={isLoggedin}></Register>
      </Route>

      <Route path="/login">
        <Login isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}></Login>
      </Route>

      <Route path="/logout">
        <Logout setIsLoggedin={setIsLoggedin}></Logout>
      </Route>

      <Route path="/otpverification">
        <VerifyOtp setIsLoggedin={setIsLoggedin}></VerifyOtp>
      </Route>

      <Route>
        <ErrorPage></ErrorPage>
      </Route>
    </Switch>
    </>
  )
}

export default App
