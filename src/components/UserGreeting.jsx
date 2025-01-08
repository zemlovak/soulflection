import { useParams } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCloudSun,
    faSun,
    faCloudMoon,
    faMoon,
  } from "@fortawesome/free-solid-svg-icons";

export const UserGreeting = () => {
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
      <h4 className="mt-8 mb-8 text-center">
        {handleTimeOfDay()}
      </h4>
    </>
  );
};

export default UserGreeting;
