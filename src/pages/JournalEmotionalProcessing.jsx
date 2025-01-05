import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMasksTheater,
  faThunderstorm,
} from "@fortawesome/free-solid-svg-icons";

import "../pages/JournalThoughts.css";
import { faSpeakap } from "@fortawesome/free-brands-svg-icons";

export const JournalEmotionalProcessing = () => {
  return (
    <>
      <h2 className="my-4 text-white">Understand what you feel ...</h2>
      <form className="text-white">
        <p className="w-3/5 text-wrap">
          Identify, understand and work through your emotions with these simple
          journaling prompts.
        </p>
        <ul className="text-xs list-decimal mt-2 mb-4 leading-5">
          <li>
            <FontAwesomeIcon icon={faMasksTheater} className="mr-2" />
            First, name the emotion you're feeling.
          </li>
          <li>
            <FontAwesomeIcon icon={faThunderstorm} className="mr-2" />
            Explore its origins, triggers, and any physical sensations
            associated with it.
          </li>
        </ul>
        <div className="grid gap-2 lg:grid-cols-2 sm:grid-cols-1">
          <textarea
            name="prompt-1"
            id="prompt-1"
            rows={3}
            cols={45}
            placeholder="What emotion is most present for me right now? Why do I think I'm feeling this way?"
            className="px-4 py-4  mx-4 mb-4 rounded-lg text-cyan-light resize-none"
          ></textarea>
          <textarea
            name="prompt-2"
            id="prompt-2"
            rows={3}
            cols={45}
            placeholder="How do I notice it in my body, e.g. tension, warmth?"
            className="px-4 py-4 mx-4 mb-4 rounded-lg text-cyan-light resize-none"
          ></textarea>
          <textarea
            name="prompt-3"
            id="prompt-3"
            rows={3}
            cols={45}
            placeholder="What event, thought, or memory might be triggering this emotion? How does that awareness help me understand it better?"
            className="px-4 py-4 mx-4 mb-4 rounded-lg text-cyan-light resize-none"
          ></textarea>
          <textarea
            name="prompt-4"
            id="prompt-4"
            rows={3}
            cols={45}
            placeholder="If I imagine this emotion as a shape or color, what would it look like and why?"
            className="px-4 py-4 mx-4 mb-4 rounded-lg text-cyan-light resize-none"
          ></textarea>
          <textarea
            name="prompt-5"
            id="prompt-5"
            rows={3}
            cols={45}
            placeholder="What healthy steps can I take—right now or in the future—to cope with or relieve this emotion?"
            className="px-4 py-4 mx-4 mb-4 rounded-lg text-cyan-light resize-none"
          ></textarea>
          <textarea
            name="prompt-6"
            id="prompt-6"
            rows={3}
            cols={45}
            placeholder="How can working through this emotion help me grow, learn, or change my perspective moving forward?"
            className="px-4 py-4 mx-4 mb-4 rounded-lg text-cyan-light resize-none"
          ></textarea>
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

export default JournalEmotionalProcessing;
