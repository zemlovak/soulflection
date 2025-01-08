import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useAuth } from "../context/AuthContext";

import { ReturnHomeBtn } from "../components/ReturnHomeBtn";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful!");
      const userName = userCredential.user.displayName || email.split("@")[0];
      login(userName);
      navigate(`/${userName}`);

    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <ReturnHomeBtn />
      <h2 className="mt-10 mb-4">Sign in to your account</h2>
      <form
      className="w-full max-w-xs flex flex-col justify-center items-center"
      onSubmit={handleLogin}>
        <div className="w-full">
          <label htmlFor="email" className="form-label mt-8">e-mail</label>
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
          <label htmlFor="password" className="form-label mt-2">password</label>
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
        <button className="cta-btn mt-8 mb-20">SIGN IN</button>
      </form>
    </>
  );
};

export default SignIn;
