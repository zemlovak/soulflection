import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../Supabase/supabaseClient";

export const MeditationPage = () => {
  const { userUrl } = useAuth();
  const [meditatedMinutes, setMeditatedMinutes] = useState(0);
  const [error, setError] = useState("");

  const handleSubmitLog = async() => {
    const { error: submitError } = await supabase
    .from("meditation-logs")
    .insert({
      minutes: meditatedMinutes,
      date: new Date().toISOString(),
    })

    if(submitError) {
      console.log(submitError.message)
      setError("Something went wrong, try again.")
    } else {
      alert("Logged successfully!")
    }
  }


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
          <NavLink
            to={`/${userUrl}/meditation/exercises`}
            end
            className={({ isActive }) =>
              `min-w-max p-2 ${
                isActive ? "font-semibold bg-cyan-light bg-opacity-95" : ""
              } bg-cyan-dark bg-opacity-50 text-white text-sm rounded-t-lg`
            }
          >
            Exercices
          </NavLink>
        </div>
        <div className="w-full h-auto bg-cyan-dark rounded-lg rounded-tl-none px-6 py-4 relative">
          <Outlet />
        </div>
        <div className="w-full h-auto bg-cyan-dark rounded-lg mt-6 px-6 py-4 relative text-white">
          <h4 className="font-sanbrainy text-6xl">Meditation log</h4>
          <div className="w-full grid grid-cols-12 items-baseline">
            <p className="font-light col-span-11">
              Today, I meditated for{" "}
              <input
                className=" text-center max-w-8 rounded-lg bg-white bg-opacity-15"
                inputMode="numeric"
                min={0}
                step={1}
                placeholder=""
                value={meditatedMinutes}
                onChange={(e) => setMeditatedMinutes(e.target.value)}
              ></input>{" "}
              minutes.
            </p>
            <button className="btn bg-cyan-light" type="submit" onClick={handleSubmitLog}>Submit</button>
          </div>
          {error && <p className="text-red-alert text-sm">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default MeditationPage;
