import React from "react";
import { Link, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import ReturnHomeBtn from "../components/ReturnHomeBtn";
import AuthFootnote from "../components/AuthFootnote";

export const AuthRoutePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <Outlet />
      ) : (
        <div className="min-h-[100vh] flex flex-col justify-center items-center">
          <ReturnHomeBtn />
          <h2 className="mt-8 mb-8">This page is accessible to authenticated users only</h2>
          <h4>Please, sign in to access its contents.</h4>
          <Link to={"/sign-in"}><button className="cta-btn mt-8 mb-2">SIGN IN</button></Link>
          <AuthFootnote/>
        </div>
      )}
    </>
  );
};

export default AuthRoutePage;
