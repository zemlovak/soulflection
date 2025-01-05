import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { ReturnHomeBtn } from "../components/ReturnHomeBtn";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
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
          <label className="form-label mt-8">e-mail</label>
          <input
            className="form-field"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <div className="w-full">
          <label className="form-label mt-2">password</label>
          <input
            className="form-field"
            type="password"
            id="password"
            name="password"
          ></input>
        </div>
        <button className="cta-btn mt-8 mb-20">SIGN IN</button>
      </form>
    </>
  );
};

export default SignIn;
