import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { Link } from "react-router";

import { ReturnHomeBtn } from "../components/ReturnHomeBtn";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await login({ email, password });
    if(error) {
      setError(error)
    }
  };

  return (
    <>
      <ReturnHomeBtn />
      <h2 className="mt-8 mb-4">Sign in to your account</h2>
      <form
        className="w-full max-w-xs flex flex-col justify-center items-center"
        onSubmit={handleLogin}
      >
        <div className="w-full">
          <label htmlFor="email" className="form-label mt-8">
            e-mail
          </label>
          <input
            className="form-field"
            type="email"
            id="email"
            name="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <div className="w-full">
          <label htmlFor="password" className="form-label mt-2">
            password
          </label>
          <input
            className="form-field"
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <button className="cta-btn mt-8 mb-2">SIGN IN</button>
      </form>
      <div className="footnote">
        <span>Don't have an account? </span>
        <Link
          to="/sign-up"
          className="mb-10 text-cyan-light font-bold transition ease-in-out duration-800 transform hover:underline "
        >
          Sign up
        </Link>
      </div>
    </>
  );
};

export default SignIn;
