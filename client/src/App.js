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
import "./App.css";

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
        <Register></Register>
      </Route>

      <Route path="/login">
        <Login setIsLoggedin={setIsLoggedin} ></Login>
      </Route>

      <Route path="/logout">
        <Logout setIsLoggedin={setIsLoggedin}></Logout>
      </Route>

      <Route>
        <ErrorPage></ErrorPage>
      </Route>
    </Switch>
    </>
  )
}

export default App
