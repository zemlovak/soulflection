import { useState } from "react";
import { useAuth } from "../context/AuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";


export const UserDropdown = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { logout, userName } = useAuth();

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
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
          onClick={() => setIsOpen(false)} // Close on click
        >
          <div className="py-1">
            <a
              href={`/${userName}`} onClick={console.log(`username: ${userName}`)}
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-light hover:bg-opacity-15"
            >
              Dashboard
            </a>
            <a
              href={`/:user/settings`}
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-light hover:bg-opacity-15"
            >
              Settings
            </a>
            <a onClick={logout}
              className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-light hover:bg-opacity-15"
            >
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
