import { Link } from "react-router";

import { useAuth } from "../../context/AuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLungs } from "@fortawesome/free-solid-svg-icons";

export const BreathworkTile = () => {
  const {userUrl} = useAuth();
  return (
    <div className=" bg-cyan-ultradark bg-opacity-50 rounded-xl pt-4 px-4 pb-4 sm:pb-8">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Link to={`/${userUrl}/breathwork`}>
          <FontAwesomeIcon
            icon={faLungs}
            className="text-9xl  hover:animate-pulse transition-all ease-in-out"
          />
        </Link>
        <p className="text-lg mt-8">Start breathing now</p>
      </div>
    </div>
  );
};

export default BreathworkTile;
