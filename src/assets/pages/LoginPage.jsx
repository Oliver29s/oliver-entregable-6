import React from "react";
import './styles-pages/register.css'

const LoginPage = () => {
  return (
    <div className="login__page">

    <div className="login__form">
      <form className="form">
        <p className="heading">Login</p>
        <input className="input" placeholder="Email" type="email" />
        <input className="input" placeholder="Password" type="text" />
        <button className="btn">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
