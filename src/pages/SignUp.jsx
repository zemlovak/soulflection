import React, { useState, useEffect } from "react";
import { Link } from "react-router";

import "./SignUp.css"

export const SignUp = () => {
  return (
    <>
     <div className='return-home'>
        <Link to='/home'>
          <img src="src\assets\icons\home.svg" alt="home icon" />
        </Link>
      </div>
      <h2 className="mt-10">Create an account</h2>
      <h4 className="text-base">to embarque on your mindfulness journey</h4>
      <form className="w-full max-w-xs flex flex-col justify-center items-center">
        <div className="w-full">
          <label className="form-label mt-8">name</label>
          <input className="form-field" type="text" id="name" name="name"></input>
        </div>
        <div className="w-full">
          <label className="form-label mt-2">surname</label>
          <input className="form-field" type="text" id="surname" name="surname"></input>
        </div>
        <div className="w-full">
          <label className="form-label mt-2">e-mail</label>
          <input className="form-field" type="email" id="email" name="email"></input>
        </div>
        <div className="w-full">
          <label className="form-label mt-2">password</label>
          <input className="form-field" type="password" id="password" name="password"></input>
        </div>
        <div className="w-full">
          <label className="form-label mt-2">re-type password</label>
          <input
          className="form-field mb-4"
            type="password"
            id="password#2"
            name="re-type password"
          ></input>
        </div>
        <div className="w-full consent">
          <input className="mr-4"
            type="checkbox"
            id="consent"
            name="consent"
          ></input>
          <label className="footnote">By creating an account, I consent to processing of my personal data in accordance with the Privacy Policy and commit to embrace the journey of mindful self-discovery with SoulfFlection.</label>
        </div>
        
        <Link to="/sign-up/success"><button className="cta-btn mt-8 mb-20">CREATE ACCOUNT</button></Link>
      </form>
    </>
  );
};

export default SignUp;
