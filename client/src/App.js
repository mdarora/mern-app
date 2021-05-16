import React from 'react';
import {Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";

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
    </>
  )
}

export default App
