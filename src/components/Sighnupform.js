import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";


function Signupform() {
  const [username, setusername] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  let errorsObj = {email: "", password: ""};
const [errors, seterrors] = useState(errorsObj);

  let navigate =useNavigate();
  
 
  const getrequest = (e) => {

    





   var currentstatus = "";

    e.preventDefault();
    const postdata = { username: username, password: password, mobileNo:mobile };
    console.log(postdata);

    axios
      .post(
        "http://65.0.112.127:8080/core/auth/public/signup",
        {
          username: username,
          password: password,
          mobileNo: mobile,
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
        console.log(response);
        currentstatus= response.status.toString();
        if(currentstatus=="200") {
          navigate('/Otp')
        }
      })
      .catch(function (error) {
        // console.log(error);
        alert("login unsuccessful " + error);
      });
  };




  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <form className="form-wrapper">
          <div className="username">
            <label className="lable">User-Name</label>
            <input
              className="input"
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="mobile">
            <label className="lable">Mobile No.</label>
            <input
              className="input"
              type="tel"
              value={mobile}
              onChange={(e) => setmobile(e.target.value)}
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
        </form>
        <div>
          <button className="submit" onClick={getrequest}>
            Sign Up
          </button>
        </div>
        <div className="alredyhaveaccount">
          <h4>Already have account</h4>
          <Link className="textspace" to="/Login">
            {" "}
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signupform;
