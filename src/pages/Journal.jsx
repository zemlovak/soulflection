import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const JournalPage = () => {
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
          Thoughts
        </NavLink>
        <NavLink
          to={`/${userUrl}/journal/self-reflection`}
          className={({ isActive }) =>
            `min-w-max p-2 ${
              isActive ? "bg-cyan-light bg-opacity-95" : ""
            } bg-cyan-dark bg-opacity-50 text-white text-sm rounded-t-lg`
          }
        >
          Self-reflection
        </NavLink>
        <NavLink
          to={`/${userUrl}/journal/emotional-processing`}
          className={({ isActive }) =>
            `min-w-max p-2 ${
              isActive ? "bg-cyan-light bg-opacity-95" : ""
            } bg-cyan-dark bg-opacity-50 text-white text-sm rounded-t-lg`
          }
        >
          Emotional processing
        </NavLink>
        <NavLink
          to={`/${userUrl}/journal/goals`}
          className={({ isActive }) =>
            `min-w-max p-2 ${
              isActive ? "bg-cyan-light bg-opacity-95" : ""
            } bg-cyan-dark bg-opacity-50 text-white text-sm rounded-t-lg`
          }
        >
          Goals
        </NavLink>
        <NavLink
          to={`/${userUrl}/journal/grounding`}
          className={({ isActive }) =>
            `min-w-max p-2 ${
              isActive ? "bg-cyan-light bg-opacity-95" : ""
            } bg-cyan-dark bg-opacity-50 text-white text-sm rounded-t-lg`
          }
        >
          Grounding
        </NavLink>
      </div>
      <div className="w-full h-auto bg-cyan-dark rounded-lg rounded-tl-none px-6 py-4">
        <Outlet />
      </div>
    </div>
  );
};

export default JournalPage;
