import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signupform() {

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");

    const signup=async()=> {
    // let data = { firstname, lastname, username, email, mobile, password };
    // console.log(data);

    const postdata = {
      email: email,
      firstName: firstname,
      lastName: lastname,
      mobileNo: mobile,
      password: password,
      username: username,
    };console.log(postdata);
    alert("hii");

   await axios
     .post("http://65.0.112.127:8080/core/auth/public/signup", {
       mobileNo: mobile,
       password: password,
       username: username,
     })
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });
    //  let result=await fetch("http://65.0.112.127:8080/core/auth/public/signup", {
    //     method: "POST", //in this all the given data is uploading to server
    //     headers: { "Content-type": "application/json",
    //                 "Accept":"application/json" },
    //     body: JSON.stringify({
    //       email: email,
    //       firstName: firstname,
    //       lastName: lastname,
    //       mobileNo: mobile,
    //       password: password,
    //       username: username,
    //     }),
    //   });
    //     result=await result.json();
    //     console.log(result);
  }

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <form className="form-wrapper">
          {/* <div className="firstname">
            <label className="lable">First Name</label>
            <input
              className="input"
              type="text"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
          </div> */}
          {/* <div className="lastname">
            <label className="lable">Last Name</label>
            <input
              className="input"
              type="text"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
          </div> */}
          <div className="username">
            <label className="lable">User-Name</label>
            <input
              className="input"
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          {/* <div className="email">
            <label className="lable">Email Address</label>
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div> */}
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
          <button className="submit" onClick={signup}>
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
