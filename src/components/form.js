import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Signup from "./Sighnupform";
import Login from "./loginform"
import Afterlogin from "./afterlogin"
import Otp from "./otp"

const Form = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Afterlogin" element={<Afterlogin />} />
        <Route path="Otp" element={<Otp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Form;
