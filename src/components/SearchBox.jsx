import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const SearchBox = () => {
  return (
    <div className="relative px-2 align-middle min-w-16 max-w-48 w-full min-h-8 bg-cyan-dark bg-opacity-25 rounded-2xl">
        <FontAwesomeIcon icon={faSearch} className="text-xl absolute top-[5px]"/>
        <input type="text" name="search" id="search" defaultValue="" className="absolute top-[3px] left-[30px] bg-transparent text-black max-w-36"/>
    </div>
  );
};

export default SearchBox;
