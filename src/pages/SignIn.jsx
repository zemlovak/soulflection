import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { useAuth } from "../context/AuthContext";

import { Link, replace } from "react-router";

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
      const { data: authData, error: authError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (authError) {
        throw authError;
      }

      console.log("Login successful!", authData);

      /* const userRoute = authData.user.user_metadata?.name || email.split("@")[0]; */
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("name")
        .eq("id", authData.user.id)
        .single();

      if (profileError) {
        throw profileError;
      }
      const userName = profileData.name;
      login(userName);
      navigate(`/${userName}`, { replace: true });
    } catch (err) {
      console.error("Error during login:", err.message);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <ReturnHomeBtn />
      <h2 className="mt-10 mb-4">Sign in to your account</h2>
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
          className="text-cyan-light font-bold transition ease-in-out duration-800 transform hover:underline "
        >
          Sign up
        </Link>
      </div>
    </>
  );
};

export default SignIn;
