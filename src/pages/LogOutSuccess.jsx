import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ReturnHomeBtn } from "../components/ReturnHomeBtn";

export const LogOutSuccess = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(6)

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate("/");
    }, 6000);
    return () => {
      clearTimeout(timer);
      clearTimeout(interval);
    };
  }, [navigate]);

  return (
    <>
      <div className="text-center w-4/5">
        <h2 className="mt-8">
          You've logged out successfully from Soulflection.
        </h2>
        <h4 className="mt-8 mb-6 animate-pulse">
          You are being redirected to the homepage ... {countdown}
        </h4>
       
        <p className="mb-4">
          If nothing happens, click the button below to return to the Homepage.
        </p>
        <Link to="/">
          <button className="cta-btn mt-4">RETURN TO HOMEPAGE</button>
        </Link>
      </div>
    </>
  );
};

export default LogOutSuccess;
