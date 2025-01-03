import React from "react";
import { Link } from "react-router";

export const SignUpSuccess = () => {
  return (
    <>
      <div className="return-home">
        <Link to="/home">
          <img src="src\assets\icons\home.svg" alt="home icon" />
        </Link>
      </div>
      <div className="text-center w-4/5">
        <h2 className="mt-8">Account created successfully.</h2>
        <h4 className="mt-8 mb-6">
          Your journey towards mindfulness begins now!
        </h4>

        <p className="mb-4">
          Please check your email to confirm your account and unlock the full
          experience of SoulFlection.
        </p>
        <p>We're excited to have you with us!</p>
      </div>
    </>
  );
};

export default SignUpSuccess;
