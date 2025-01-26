import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { NavLink, Outlet } from "react-router";

export const YogaPage = () => {
  const { userUrl } = useAuth();

  return (
    <div className="min-w-96 px-8 py-8 mb-8 sm:px-12 bg-cyan-dark bg-opacity-25 rounded-xl">
      <div className="w-full h-8 text-sm flex flex-row justify-start items-center">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            `min-w-max p-2 ${
              isActive ? "font-semibold bg-cyan-light bg-opacity-95" : ""
            } bg-cyan-dark bg-opacity-50 text-white text-sm rounded-t-lg`
          }
        >
          Asanas
        </NavLink>
        <NavLink
          to={`/${userUrl}/yoga/flows`}
          className={({ isActive }) =>
            `min-w-max p-2 ${
              isActive ? "font-semibold bg-cyan-light bg-opacity-95" : ""
            } bg-cyan-dark bg-opacity-50 text-white text-sm rounded-t-lg`
          }
        >
          Flows
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default YogaPage;
