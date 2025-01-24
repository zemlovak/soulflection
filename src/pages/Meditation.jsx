import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router";
import Timer from "../components/Timer";
import { useAuth } from "../context/AuthContext";

export const MeditationPage = () => {

  const {userUrl} = useAuth();
  
  return (
    <>
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
            Timer
          </NavLink>
          <NavLink
             to={`/${userUrl}/meditation/sounds`}
            end
            className={({ isActive }) =>
              `min-w-max p-2 ${
                isActive ? "font-semibold bg-cyan-light bg-opacity-95" : ""
              } bg-cyan-dark bg-opacity-50 text-white text-sm rounded-t-lg`
            }
          >
            Soothing sounds
          </NavLink>
          <NavLink
             to={`/${userUrl}/meditation/guided`}
            end
            className={({ isActive }) =>
              `min-w-max p-2 ${
                isActive ? "font-semibold bg-cyan-light bg-opacity-95" : ""
              } bg-cyan-dark bg-opacity-50 text-white text-sm rounded-t-lg`
            }
          >
            Guided meditation
          </NavLink>
        </div>
        <div className="w-full h-auto bg-cyan-dark rounded-lg rounded-tl-none px-6 py-4 relative">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MeditationPage;
