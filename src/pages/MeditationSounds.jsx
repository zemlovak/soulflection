import { useEffect, useRef, useState } from "react";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import audioURLs from "../assets/content/meditationSoundsURLS";


export const MeditationSounds = () => {
  const audioRef = useRef(null);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    audioRef.current = new Audio();

    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.pause();
      audio.src = "";
    };
  }, []);

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
    const secondsStr = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutesStr}:${secondsStr}`;
  };

  const handlePlay = (trackIndex) => {
    const audio = audioRef.current;

    if (currentTrackIndex !== null && currentTrackIndex !== trackIndex) {
      handleStop();
    }

    if (currentTrackIndex !== trackIndex) {
      audio.src = audioURLs[trackIndex].url;
      setCurrentTime(0);
      setDuration(0);
      setCurrentTrackIndex(trackIndex);
    }

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.log("Error playing audio:", err);
      });
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  return (
    <ul className="text-white font-light">
      {audioURLs.map((track, index) => {
        const isCurrent = index === currentTrackIndex;

        return (
          <li
            key={track.url}
            className="py-4 w-full grid lg:grid-cols-12 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-3 items-baseline"
          >
            <div
              className={`lg:mr-6 h-8 rounded-full px-3 py-1 bg-cyan-light text-center align-middle
                transition-all duration-700 ease-in-out
                ${
                  isCurrent && (isPlaying || currentTime > 0)
                    ? "lg:col-span-2 sm:col-span-1"
                    : "col-span-1"
                }`}
            >
              {(!isCurrent || !isPlaying) && (
                <button onClick={() => handlePlay(index)}>
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="text-white text-base"
                  />
                </button>
              )}
              {isCurrent && isPlaying && (
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

            <div className="lg:col-span-5 sm:col-span-1">
              <p className="font-semibold text-lg">{track.name}</p>
              <p className="text-sm">
                <span className="italic mr-2">
                  ({formatTime(track.length * 60)})
                </span>
                {track.description}
              </p>
            </div>

            {isCurrent && (isPlaying || currentTime > 0) && (
              <div className="lg:ml-4 sm:mt-4 lg:col-span-5 sm:col-span-1 bg-white bg-opacity-15 rounded-full px-6 py-1 align-middle text-center">
                <span>{formatTime(currentTime)}</span>
                <div
                  className="ml-4 w-36 h-2 bg-cyan-ultradark rounded-full overflow-hidden inline-block"
                  style={{ position: "relative" }}
                >
                  <div
                    className="bg-white h-2"
                    style={{
                      width: duration
                        ? `${(currentTime / duration) * 100}%`
                        : "0%",
                    }}
                  />
                </div>
                <span className="ml-4">
                  - {formatTime(duration - currentTime)}
                </span>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MeditationSounds;
