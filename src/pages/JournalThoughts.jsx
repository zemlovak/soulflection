import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStopwatch,
  faTextSlash,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

import { Timer } from "../components/Timer";
import "./JournalThoughts.css";

export const JournalThoughts = () => {
  return (
    <>
      <h2 className="my-4 text-white">Share your thoughts ...</h2>
      <form className="text-white">
        <label htmlFor="automatic-writing">
          This is an automatic writing exercise.
        </label>
        <ul className="text-xs list-decimal mt-2 mb-4 leading-5">
          <li>
            <FontAwesomeIcon icon={faStopwatch} className="mr-2" />
            Set the timer below, e.g. 5 or 10 minutes.
          </li>
          <li>
            <FontAwesomeIcon icon={faPencil} className="mr-2" />
            Write continuously without stopping your keyboard typing.
          </li>
          <li>
            <FontAwesomeIcon icon={faTextSlash} className="mr-2" />
            Don't worry about grammar, structure, or punctuation—just let it
            flow.
          </li>
        </ul>
        <div className="w-full relative">
          <textarea
            name="automatic-writing"
            id="automatic-writing"
            rows={7}
            cols={65}
            placeholder="What's the very first thing that pops into your mind?"
            className="px-4 py-4 rounded-lg text-cyan-light resize-none"
          ></textarea>
          <Timer />
        </div>
        <div className="flex flex-row justify-between items-center">
          <button type="reset" className="mr-2 text-white text-sm font-medium">
            Discard
          </button>
          <button type="submit" className="btn text-white bg-cyan-light">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default JournalThoughts;
