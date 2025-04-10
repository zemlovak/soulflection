import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { userUrl } = useAuth();
  return (
    <>
      <nav className="w-full h-6">
        <ul className="flex justify-around">
          <Link to={`/${userUrl}/journal`}>
            <li className="ml-8 mr-2 hover:font-semibold">journaling</li>
          </Link>
          <Link to={`/${userUrl}/meditation`}>
            <li className="ml-2 mr-2 hover:font-semibold">meditation</li>
          </Link>
          <Link to={`/${userUrl}/breathwork`}>
            <li className="ml-2 mr-2 hover:font-semibold">breathwork</li>
          </Link>
          <Link to={`/${userUrl}/yoga`}>
            <li className="ml-2 mr-8 hover:font-semibold">yoga</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

