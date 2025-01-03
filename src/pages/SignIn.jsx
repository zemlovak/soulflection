import React from "react";
import { Link } from "react-router";

export const SignIn = () => {
  return (
    <>
      <div className="return-home">
        <Link to="/home">
          <img src="src\assets\icons\home.svg" alt="home icon" />
        </Link>
      </div>
      <h2 className="mt-10 mb-10">Sign in to your account</h2>
      <form className="w-full max-w-xs flex flex-col justify-center items-center">
        <div className="w-full">
          <label className="form-label mt-8">e-mail</label>
          <input className="form-field" type="email" id="email" name="email"></input>
        </div>
        <div className="w-full">
          <label className="form-label mt-2">password</label>
          <input className="form-field" type="password" id="password" name="password"></input>
        </div>
        <button className="cta-btn mt-8 mb-20">SIGN IN</button>
      </form>
    </>
  );
};

export default SignIn;
