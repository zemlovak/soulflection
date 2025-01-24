import React, { useEffect, useRef, useState } from "react";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const audioURLs = [
  {
    name: "12 minute Wind Chimes",
    url: "https://cdn.freesound.org/previews/386/386470_6885640-lq.mp3",
  },
  // ... other sounds if needed
];

export const MeditationSounds = () => {
  // 1) Create an audioRef to store the Audio object
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  /**
   * Format a time value (in seconds) to mm:ss string
   */
  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
    const secondsStr = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutesStr}:${secondsStr}`;
  };

  /**
   * Set up event listeners for loadedmetadata and timeupdate
   * so we can keep track of the audio’s duration and current time.
   */
  useEffect(() => {
    audioRef.current = new Audio(audioURLs[0].url);

    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

    // Cleanup event listeners when component unmounts
    return () => {
        audioRef.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  /**
   * PLAY, PAUSE, STOP (STOP = pause + reset to 0)
   */
  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0; // reset audio
    setCurrentTime(0);
    setIsPlaying(false);
  };

  return (
    <ul className="text-white font-light">
      <li className="py-4 flex flex-row justify-start items-baseline">
        {/* Button Group */}
        <div className="mr-6  h-8  rounded-full px-3 py-1 bg-cyan-light text-center align-middle">
          <button onClick={handlePlay}>
            <FontAwesomeIcon icon={faPlay} className="text-white text-base" />
          </button>

          {(isPlaying || currentTime) > 0 && (
            <>
              <button className="mx-2" onClick={handlePause}>
                <FontAwesomeIcon
                  icon={faPause}
                  className="text-white text-base"
                />
              </button>
              <button onClick={handleStop}>
                <FontAwesomeIcon
                  icon={faStop}
                  className="text-white text-base"
                />
              </button>
            </>
          )}
        </div>

        {audioURLs[0].name}

        {/* Progress display (only if isPlaying OR if we've started) */}
        {(isPlaying || currentTime > 0) && (
          <div className="ml-4 bg-cyan-light rounded-full px-6 py-1 flex items-center">
            <span>{formatTime(currentTime)}</span>
            <hr className="inline-block w-[60px] mx-2" />
            <span>{formatTime(duration - currentTime)}</span>

            {/* If you'd like a progress bar: */}
            <div
              className="ml-4 w-36 h-2 bg-gray-300 rounded-full overflow-hidden"
              style={{ position: "relative" }}
            >
              <div
                className="bg-blue-500 h-2"
                style={{
                  width: duration ? `${(currentTime / duration) * 100}%` : "0%",
                }}
              />
            </div>
          </div>
        )}
      </li>
    </ul>
  );
};

export default MeditationSounds;
