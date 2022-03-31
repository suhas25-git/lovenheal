/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function loginform() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
   let errorsObj = { username: "", password: "" };
   const [errors, seterrors] = useState(errorsObj);

  let navigate = useNavigate();


  const postDataHandler = (e) => {

    e.preventDefault();
    
       var currentstatus = "";

       e.preventDefault();
       const postdata = { username: username, password: password };
       console.log(postdata);

       axios
         .post(
           "http://65.0.112.127:8080/core/auth/public/login",
           {
             username: username,
             password: password,
           },
           {
             headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
               "Access-Control-Allow-Origin": "*",
             },
           }
         )
         .then(function (response) {
           console.log(response.data.accessToken);
           const data=response.data.accessToken;
           currentstatus = response.status.toString();
           if (currentstatus === "200") {
             navigate("/Afterlogin", data);
           }
         })
         .catch(function (error) {
           console.log(error);
           alert("login unsuccessful");
         });
       console.log(currentstatus);
     };



    

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <form className="form-wrapper">
          <div className="username">
            <div>
              <label className="lable">User-Name</label>
              <input
                className="input"
                type="text"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
            </div>
            {errors.username && <div>{errors.username}</div>}
          </div>
          <div className="password">
            <div>
              <label className="lable">Password</label>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            {errors.password && <div>{errors.password}</div>}
          </div>
          <div>
            <button className="submit" onClick={postDataHandler}>
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
