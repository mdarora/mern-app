import React from 'react';
import {Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/404";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar/>

      <Route exact path="/">
        <Home></Home>
      </Route>

      <Route path="/about">
        <About></About>
      </Route>

      <Route path="/contact">
        <Contact></Contact>
      </Route>

      <Route path="/login">
        <Login></Login>
      </Route>

      <Route path="/register">
        <Register></Register>
      </Route>

      <Route>
        <ErrorPage></ErrorPage>
      </Route>
    </>
  )
}

export default App
