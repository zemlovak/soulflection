import React from "react";
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav className="w-full h-6">
        <ul className="flex justify-around">
          <Link to={"/:user/journal"}>
            <li className="ml-8 mr-2 hover:font-semibold">journaling</li>
          </Link>
          <Link>
            <li className="ml-2 mr-2 hover:font-semibold">meditation</li>
          </Link>
          <Link>
            <li className="ml-2 mr-2 hover:font-semibold">breathwork</li>
          </Link>
          <Link>
            <li className="ml-2 mr-8 hover:font-semibold">yoga</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

