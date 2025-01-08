import { useAuth } from "../context/AuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCloudSun,
    faSun,
    faCloudMoon,
    faMoon,
  } from "@fortawesome/free-solid-svg-icons";

export const UserGreeting = () => {
  const { userName } = useAuth();

  const handleTimeOfDay = () => {
    const date = new Date();
    let hours = date.getHours();

    if (hours >= 5 && hours < 12) {
      return (
        <>
          <FontAwesomeIcon icon={faCloudSun} className="mr-2" />
          Good Morning, {userName}
        </>
      );
    } else if (hours >= 12 && hours < 18) {
      return (
        <>
          <FontAwesomeIcon icon={faSun} className="mr-2" />
          Good Afternoon, {userName}
        </>
      );
    } else if (hours >= 18 && hours < 22) {
      return (
        <>
          <FontAwesomeIcon icon={faCloudMoon} className="mr-2" />
          Good Evening, {userName}
        </>
      );
    } else {
      return (
        <>
          <FontAwesomeIcon icon={faMoon} className="mr-2" />
          Good Night, {userName}
        </>
      );
    }
  };

  return (
    <>
      <h4 className="mt-8 mb-8 text-center">
        {handleTimeOfDay()}
      </h4>
    </>
  );
};

export default UserGreeting;
