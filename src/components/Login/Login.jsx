import React from "react";
import Appp from "./Appp";
import imageurl from './image/bimg.jpg'

function Login() {
  return (
    <div className="login">
      <img src={imageurl} alt="" />
        <Appp />
    </div>
  );
}

export default Login;
