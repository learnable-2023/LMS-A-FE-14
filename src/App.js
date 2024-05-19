import React from "react";
import "./App.css";
import LoginForm from "./StudentLogin/StudentLogin";
import StudentProfile from "./StudentScreens/StudentProfile";




export default function GoLearn() {

    return (
      <div className="App">
        <LoginForm />
        <StudentProfile />
      </div>
    );
}

