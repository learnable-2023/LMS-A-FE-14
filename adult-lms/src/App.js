import React from "react";
import Signup from "./Components/AdminSignUp";
import "./App.css";
import Login from "./Components/AdminLogin";
import Welcome from "./component/welcome";
import Header from "./component/welcomeheader";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Courses from './component/selectcourse';


export default function GoLearn() {
    return (
        <div className="App">
            <Header />
            <Welcome />
            <Courses />
            <Signup />
            <Login />
      </div>
    // <Router>
    //   <div className="App">
    //     <Link>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>

    //       <Route path="/signup">
    //         <Signup />
    //       </Route>

    //       <Route path="/login">
    //         <Login />
    //       </Route>

    //       <Route path="/header">
    //         <Header />
    //       </Route>

    //       <Route path="/welcome">
    //         <Welcome />
    //       </Route>
    //     </Link>
    //   </div>
    // </Router>
  );
}
