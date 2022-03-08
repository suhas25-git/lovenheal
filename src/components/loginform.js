/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function loginform() {
console.log("hi");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const login=async()=> {
    const postdata = { username: username, password: password };
    console.log(postdata);

    await axios
      .post("http://65.0.112.127:8080/core/auth/public/login", postdata)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <form className="form-wrapper">
          <div className="email">
            <label className="lable">User-Name</label>
            <input
              className="input"
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="password">
            <label className="lable">Password</label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div>
            <button className="submit" onClick={login()}>
              Login
            </button>
          </div>
        </form>
        <div className="alredyhaveaccount">
          <h4>Don't have account</h4>
          <Link className="textspace" to="/Signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default loginform;
