import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStopwatch,
  faPlay,
  faPause,
  faRotateBack,
} from "@fortawesome/free-solid-svg-icons";

import "../pages/JournalThoughts.css";

export const Timer = ({buttonDown=false}) => {
  const [clicked, setClicked] = useState(buttonDown);

  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const formatTime = (num) => String(num).padStart(2, "0");
    setInputValue(
      `${formatTime(time.hours)}:${formatTime(time.minutes)}:${formatTime(
        time.seconds
      )}`
    );
  }, [time]);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => decrementTime(prev));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const decrementTime = (time) => {
    if (time.seconds > 0) {
      return { ...time, seconds: time.seconds - 1 };
    } else if (time.minutes > 0) {
      return { ...time, minutes: time.minutes - 1, seconds: 59 };
    } else if (time.hours > 0) {
      return { ...time, hours: time.hours - 1, minutes: 59, seconds: 59 };
    } else {
      setIsRunning(false);

      playSoundMultipleTimes(3);

   /*    vibrateScreen(); */

      return { hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    const parts = e.target.value.split(":");
    if (parts.length === 3) {
      const [hours, minutes, seconds] = parts.map(
        (part) => parseInt(part, 10) || 0
      );
      if (
        hours >= 0 &&
        minutes >= 0 &&
        minutes < 60 &&
        seconds >= 0 &&
        seconds < 60
      ) {
        setTime({ hours, minutes, seconds });
      }
    }
  };

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
    setInputValue("");
  };

  const playSoundMultipleTimes = (times) => {
    const audio = new Audio("https://cdn.freesound.org/previews/653/653752_7123687-lq.mp3"); 
    let count = 0;
  
    const playSound = () => {
      if (count < times) {
        count++;
        audio.play();
      }
    };
  
    audio.addEventListener("ended", playSound);
    playSound();
  };

/*   const vibrateScreen = () => {
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200]);
      console.log("vibrated")
    } else {
      console.log("Vibration API not supported");
    }
  }; */

  return (
    <div
      onClick={(e) => e.preventDefault()}
      className={`absolute bottom-4 left-3 btn cursor-pointer h-8 bg-cyan-light text-white flex items-center`}
    >
      <div className="inline-flex h-full">
        <FontAwesomeIcon
          onClick={(e) => {
            e.preventDefault();
            setClicked((prev) => !prev);
          }}
          icon={faStopwatch}
          className="text-xl"
        />
      </div>
      <div
        className={`h-8 overflow-hidden inline-flex items-center timer ${
          clicked ? "max-w-full ml-4 text-white" : "max-w-0 text-transparent"
        }`}
      >
        <input
          rows={10}
          className="inline-flex align-text-top h-8 resize-none max-w-20 px-2 py-2 bg-cyan-light placeholder:text-white"
          type="text"
          value={inputValue}
          placeholder="HH:MM:SS"
          onClick={(e) => e.preventDefault()}
          onChange={handleInputChange}
        ></input>{" "}
        <FontAwesomeIcon onClick={startTimer} className="ml-2" icon={faPlay} />{" "}
        <FontAwesomeIcon onClick={stopTimer} className="ml-2" icon={faPause} />{" "}
        <FontAwesomeIcon onClick={resetTimer} className="ml-2" icon={faRotateBack} />
      </div>
    </div>
  );
};

export default Timer;
