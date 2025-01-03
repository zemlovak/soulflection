import React from "react";
import { Link } from "react-router";

import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <h1 className="font-sanbrainy">soulflection</h1>
      <h4>Your mindful living begins here.</h4>
      <Link to="/sign-up">
        <button className="cta-btn mt-8 mb-2">CREATE ACCOUNT</button>
      </Link>
      <div className="footnote">
        <span >Already have an account? </span>
        <Link to="/sign-in" className="text-cyan-light font-bold transition ease-in-out duration-800 transform hover:underline ">Sign in</Link>
      </div>
    </>
  );
}

export default LandingPage;
