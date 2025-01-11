import { useState } from "react";
import { useAuth } from "../context/AuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faChartArea,
  faChartBar,
  faChartPie,
  faGear,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

export const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, userName } = useAuth();

  return (
    <div className="relative inline-block text-left">
      <div
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center focus:outline-none cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faUserCircle}
          className="text-2xl text-gray-600"
        />
      </div>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="py-1">
            <NavLink
              to={`/${userName}`}
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-dark hover:bg-opacity-25 hover:font-medium"
            >
              <FontAwesomeIcon icon={faChartPie} className="mr-4" />
              Dashboard
            </NavLink>
            <NavLink
              to={`/${userName}/settings`}
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-dark hover:bg-opacity-25 hover:font-medium"
            >
              <FontAwesomeIcon icon={faGear} className="mr-4"/>
              Settings
            </NavLink>
            <NavLink
              to={"/logout"}
              onClick={logout}
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-ultradark hover:bg-opacity-25 hover:font-medium"
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} className="mr-4"/>
              Sign Out
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
