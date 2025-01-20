import React, { useState, useEffect } from "react";

const moonPhaseImgMap = {
  "Full Moon": "full-moon.png",
  "New Moon": "new-moon.png",
  "Waxing Crescent": "waxing-crescent.png",
  "Waxing Gibbous": "waxing-gibbous.png",
  "Waning Gibbous": "waning-gibbous.png",
  "Waning Crescent": "waning-crescent.png",
  "First Quarter": "first-quarter.png",
  "Last Quarter": "last-quarter.png",
};

export const MoonPhaseTile = () => {
  const [moonPhase, setMoonPhase] = useState("");

  useEffect(() => {
    const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;

    const date = new Date();
    const today = date.toISOString().split("T")[0];

    const fetchMoonData = async () => {
      try {
        const response = await fetch(
          `${WEATHER_API_URL}?key=${WEATHER_API_KEY}&q=Prague&dt=${today}`
        );
        const data = await response.json();
        setMoonPhase(data.astronomy.astro.moon_phase);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMoonData();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-transparent rounded-xl">
        {moonPhase ? (
          <>
            <img
              className="drop-shadow-lg"
              src={`src/assets/images/moon_phases/${moonPhaseImgMap[moonPhase]}`}
              alt={`${moonPhase}`}
            />
            <p className="text-black font-sanbrainy text-5xl">{moonPhase}</p>
          </>
        ) : (
          <p className="font-sanbrainy text-4xl text-black">
            Loading moon phase <span className="animate-pulse">...</span>
          </p>
        )}
      </div>
    </>
  );
};

export default MoonPhaseTile;
