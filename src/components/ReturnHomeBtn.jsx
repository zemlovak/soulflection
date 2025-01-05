import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const ReturnHomeBtn = () => {
  return (
    <div className="return-home">
      <Link to="/">
        <FontAwesomeIcon icon={faHome} className="text-xl" />
      </Link>
    </div>
  );
};

export default ReturnHomeBtn;
