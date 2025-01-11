import { Link } from "react-router";

export const AuthFootnote = () => {
  return (
    <>
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

export default AuthFootnote;
