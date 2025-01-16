import React from "react";
import { Link, Outlet, useParams } from "react-router";
import { useAuth } from "../context/AuthContext";
import ReturnHomeBtn from "../components/ReturnHomeBtn";
import AuthFootnote from "../components/AuthFootnote";

export const AuthRoutePage = () => {
  const { userId } = useParams();
  const { isLoggedIn, userUrl } = useAuth();

  if (isLoggedIn) {
    if (userId !== userUrl) {
      return (
        <>
          <div className="min-h-[100vh] flex flex-col justify-center items-center">
            <ReturnHomeBtn />
            <h2 className="mt-8 mb-8">
              The contents of the page you are trying to reach belong to another
              user
            </h2>
            <h4>
              Please, enter a valid url to access your personal content or sign
              in again.
            </h4>
            <Link to={`/${userUrl}`}>
              <button className="cta-btn mt-8 mb-2">RETURN TO DASHBOARD</button>
            </Link>
            <AuthFootnote />
          </div>
        </>
      );
    }
    if (userId === userUrl) {
      return <Outlet />;
    }   
  } else {
    return (
      <div className="min-h-[100vh] flex flex-col justify-center items-center">
        <ReturnHomeBtn />
        <h2 className="mt-8 mb-8">
          This page is accessible to authenticated users only
        </h2>
        <h4>Please, sign in to access its contents.</h4>
        <Link to={"/sign-in"}>
          <button className="cta-btn mt-8 mb-2">SIGN IN</button>
        </Link>
        <AuthFootnote />
      </div>
    );
  }
};

export default AuthRoutePage;
