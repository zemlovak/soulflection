import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router";

import { supabase } from "../Supabase/supabaseClient";

import "./SignUp.css";
import ReturnHomeBtn from "../components/ReturnHomeBtn";
import { useAuth } from "../context/AuthContext";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");

  const { register } = useAuth();

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!consent) {
      setError("You must consent to the Privacy Policy to create an account.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character."
      );
      return;
    }

    const { data: user, error: authError } = await register(
      email,
      password,
      name,
      surname
    );

    if (authError) {
      console.error(authError.message);
      setError("Something went wrong, please try again later.");
    } else {
      console.log("sign-up success");
    }
  };

  return (
    <>
      <ReturnHomeBtn />
      <h2 className="mt-10">Create an account</h2>
      <h4 className="text-base">to embarque on your mindfulness journey</h4>
      <form
        className="w-full max-w-xs flex flex-col justify-center items-center"
        onSubmit={handleSignUp}
      >
        <div className="w-full">
          <label className="form-label mt-8">name</label>
          <input
            className="form-field"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <label className="form-label mt-2">surname</label>
          <input
            className="form-field"
            type="text"
            id="surname"
            name="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label className="form-label mt-2">e-mail</label>
          <input
            className="form-field"
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label className="form-label mt-2">password</label>
          <input
            className="form-field"
            type="password"
            id="password"
            name="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <label className="form-label mt-2">re-type password</label>
          <input
            className="form-field mb-4"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <p className="my-2 text-sm font-medium text-red-alert">{error}</p>
        )}

        <div className="w-full consent">
          <input
            className="mr-4"
            type="checkbox"
            id="consent"
            name="consent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
          />
          <label className="footnote">
            By creating an account, I consent to processing of my personal data
            in accordance with the Privacy Policy and commit to embrace the
            journey of mindful self-discovery with SoulfFlection.
          </label>
        </div>

        <button
          className="cta-btn mt-8 mb-2 disabled:cursor-not-allowed"
          type="submit"
          disabled={
            !name ||
            !surname ||
            !email ||
            !password ||
            !confirmPassword ||
            !consent
          }
        >
          CREATE ACCOUNT
        </button>
      </form>
      <div className="footnote">
        <span>Already have an account? </span>
        <Link
          to="/sign-in"
          className="text-cyan-light font-bold transition ease-in-out duration-800 transform hover:underline "
        >
          Sign in
        </Link>
      </div>
    </>
  );
};

export default SignUp;
