import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Signup from "./Sighnupform";
import Login from "./loginform"

const Form = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Form;
