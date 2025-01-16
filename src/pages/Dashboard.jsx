import { Link } from "react-router";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendar,
  faLungs,
  faPenToSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";
import UserGreeting from "../components/UserGreeting";

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
};

const titleStyleMap = {
  "Journal Thoughts": " bg-cyan-light text-white",
  "Self-reflection": "bg-cyan-ultradark bg-opacity-50 text-white",
  "Emotional Processing": "bg-cyan-dark text-white",
  "Goals": "bg-cyan-ultradark text-white",
  "Grounding": "bg-black bg-opacity-50 text-white",
};

export const Dashboard = () => {
  const [journalEntries, setJournalEntries] = useState([]);
  const [error, setError] = useState("");
  const [moonPhase, setMoonPhase] = useState("")
  const { user, userUrl } = useAuth();


  useEffect(() => {
    if (!user) return;

    const getJournalEntries = async () => {
      const { data: journalData, error: journalError } = await supabase
        .from("journal_entries")
        .select()
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(4);

      if (journalError) {
        console.error("Error fetching journal entries:", journalError);
        setError("Failed to fetch journal entries.");
      } else {
        setJournalEntries(journalData || []);
      }
    };

    getJournalEntries();
  }, []);


  useEffect(()=>{
    const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;

    const date = new Date;
    const today = date.toISOString().split('T')[0];

    const fetchMoonData = async () => {
      try {
        const response = await fetch(`${WEATHER_API_URL}?key=${WEATHER_API_KEY}&q=Prague&dt=${today}`);
        const data = await response.json()
        setMoonPhase(data.astronomy.astro.moon_phase)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMoonData();
  },[])

  return (
    <>
      <UserGreeting />
      <div className="px-8 py-8 mb-8 sm:px-12 bg-cyan-dark bg-opacity-25 rounded-xl grid gap-4 lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-3 text-white">
        <div className="flex flex-col justify-center items-center bg-transparent rounded-xl">
          <img
            className="size-48 drop-shadow-lg"
            src="src/assets/images/full-moon.png"
            alt="full moon"
          />
          <p className="text-black">{moonPhase}</p>
        </div>
        <div className="flex flex-col justify-between items-center bg-cyan-ultradark bg-opacity-50 rounded-xl px-4 py-4 sm:py-8">
          <p>You're on a</p>
          <p className="text-bold text-4xl mx-4">
            <strong>10 day</strong>
          </p>
          <p>meditation streak</p>
          <p className="text-xl">Keep it up!</p>
        </div>
        <div className="flex flex-col justify-start items-center lg:col-span-2 bg-cyan-ultradark bg-opacity-50 rounded-xl pt-4 px-4 pb-4 sm:pb-8 relative bookmark">
          <div className="w-full text-right mb-2 mr-4">
            <Link to={`/${userUrl}/journal`}>
              <button className="btn bg-white text-cyan-ultradark">
                <FontAwesomeIcon icon={faPenToSquare} /> New
              </button>
            </Link>
          </div>
          {error ? (
            <p>{error}</p>
          ) : (
            journalEntries.map((entry) => (
              <div
                key={entry.id}
                className="w-full mb-2 max-h-12 overflow-hidden text-left"
              >
                <div className="flex justify-start items-center">
                  <div className="font-medium text-lg">
                    {formatDate(entry.created_at)}
                  </div>
                  <div key={entry.id} className={`ml-4 px-2 rounded-md ${titleStyleMap[entry.title]  ?? 'bg-cyan-ultradark text-white'}`}>{entry.title}</div>
                </div>{" "}
                <p key={entry.id}>{entry.content.substring(0, 68)} ...</p>
              </div>
            ))
          )}
        </div>
        <div className=" bg-cyan-ultradark bg-opacity-50 rounded-xl pt-4 px-4 pb-4 sm:pb-8 overflow-hidden">
          <div className="w-full flex justify-between items-center mb-4 mr-4">
            <div>
              <FontAwesomeIcon icon={faBell} /> Up next
            </div>
            <Link>
              <button className="btn bg-white text-cyan-ultradark">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </Link>
          </div>
          <ol>
            <li>
              <hr />
              <div>
                <FontAwesomeIcon icon={faCalendar} />
                <time dateTime="2025-01-4T20:00">
                  {" "}
                  January 4th, 2025 at 8:00 PM
                </time>
                <p className="font-bold font-lg mb-2">Yoga before bed</p>
              </div>
            </li>
            <hr />
            <li>
              <div>
                <FontAwesomeIcon icon={faCalendar} />
                <time dateTime="2025-01-10T7:00">
                  {" "}
                  January 10th, 2025 at 7:00 AM
                </time>
                <p className="font-bold font-lg mb-2">Morning meditation</p>
              </div>
            </li>
            <hr />
            <li>
              <div>
                <FontAwesomeIcon icon={faCalendar} />
                <time dateTime="2025-01-4T08:00">
                  {" "}
                  January 12th, 2025 at 8:00 AM
                </time>
                <p className="font-bold font-lg mb-2">Wake-up pranayama</p>
              </div>
            </li>
            <hr />
          </ol>
        </div>
        <div className=" bg-cyan-ultradark bg-opacity-50 rounded-xl pt-4 px-4 pb-4 sm:pb-8">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <Link>
              <FontAwesomeIcon
                icon={faLungs}
                className="text-9xl  hover:animate-pulse transition-all ease-in-out"
              />
            </Link>
            <p className="text-lg mt-8">Start breathing now</p>
          </div>
        </div>
        <div className="lg:col-span-2 bg-transparent rounded-xl px-4 pt-16 sm:pt-20">
          <p className="font-sanbrainy text-6xl text-wrap text-center align-middle text-black">
            "You can't stop the waves, but you can learn to surf"
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
