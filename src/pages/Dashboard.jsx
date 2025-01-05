import React from "react";
import { Link, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendar,
  faCloudMoon,
  faCloudSun,
  faLungs,
  faMoon,
  faPenToSquare,
  faPlus,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.css";

export const Dashboard = () => {
  
  let user = useParams().user;
  user = user.charAt(0).toUpperCase() + user.slice(1);

  const handleTimeOfDay = () => {
    const date = new Date();
    let hours = date.getHours();

    if (hours >= 5 && hours < 12) {
      return (
        <>
          <FontAwesomeIcon icon={faCloudSun} className="mr-2" />
          Good Morning, {user}
        </>
      );
    } else if (hours >= 12 && hours < 18) {
      return (
        <>
          <FontAwesomeIcon icon={faSun} className="mr-2" />
          Good Afternoon, {user}
        </>
      );
    } else if (hours >= 18 && hours < 22) {
      return (
        <>
          <FontAwesomeIcon icon={faCloudMoon} className="mr-2" />
          Good Evening, {user}
        </>
      );
    } else {
      return (
        <>
          <FontAwesomeIcon icon={faMoon} className="mr-2" />
          Good Night, {user}
        </>
      );
    }
  };

  return (
    <>
      <h4 className="user-greeting relative mt-8 mb-8 text-center">
        {handleTimeOfDay()}
      </h4>
      <div className="px-8 py-8 mb-8 sm:px-12 bg-cyan-dark bg-opacity-25 rounded-xl grid gap-4 lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-3 text-white">
        <div className="flex justify-center items-center bg-transparent rounded-xl">
          <img
            className="size-48 drop-shadow-lg"
            src="src/assets/images/full-moon.png"
            alt="full moon"
          />
        </div>
        <div className="flex flex-col justify-between items-center bg-cyan-ultradark bg-opacity-50 rounded-xl px-4 py-4 sm:py-8">
          <p>You're on a</p>
          <p className="text-bold text-4xl mx-4">
            <strong>10 day</strong>
          </p>
          <p>meditation streak</p>
          <p className="text-xl">Keep it up!</p>
        </div>
        <div className="flex flex-col justify-between items-center lg:col-span-2 bg-cyan-ultradark bg-opacity-50 rounded-xl pt-4 px-4 pb-4 sm:pb-8 relative bookmark">
          <div className="w-full text-right mb-2 mr-4">
            <Link>
              <button className="btn bg-white text-cyan-ultradark">
                <FontAwesomeIcon icon={faPenToSquare} /> New
              </button>
            </Link>
          </div>
          <p>17/12/2024 16:48 Today, I feel optimistic as I applied for ...</p>
          <p>17/12/2024 16:48 Today, I feel optimistic as I applied for ...</p>
          <p>17/12/2024 16:48 Today, I feel optimistic as I applied for ...</p>
          <p>17/12/2024 16:48 Today, I feel optimistic as I applied for ...</p>
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
