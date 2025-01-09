import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faHeart } from "@fortawesome/free-solid-svg-icons";

import "./JournalThoughts.css";

export const JournalSelfReflection = () => {
  return (
    <>
      <h2 className="my-4 text-white">Time to self-reflect ...</h2>
      <form className="text-white">
        <p className="w-3/5 text-wrap">
          Here are some journaling prompts to help you gain insights about your
          personal experiences, behaviors, and beliefs.
        </p>
        <ul className="text-xs list-decimal mt-2 mb-4 leading-5">
          <li>
            <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
            Read each prompt and allow yourself a few moments to think before
            writing.
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} className="mr-2" />
            Aim for honest introspection—this is a conversation with yourself.
          </li>
        </ul>
        <div className="grid gap-2 lg:grid-cols-2 sm:grid-cols-1">
          <textarea
            name="prompt-1"
            id="prompt-1"
            rows={3}
            cols={45}
            placeholder="What have I learned about myself today or this week?"
            className="px-4 py-4  mx-4 mb-4 rounded-lg text-cyan-light resize-none"
          ></textarea>
          <textarea
            name="prompt-2"
            id="prompt-2"
            rows={3}
            cols={45}
            placeholder="In which area of my life do I feel I've grown the most recently, and what sparked that growth?"
            className="px-4 py-4 mx-4 mb-4 rounded-lg text-cyan-light resize-none"
          ></textarea>
          <textarea
            name="prompt-3"
            id="prompt-3"
            rows={3}
            cols={45}
            placeholder="What recurring thought, behavior, or situation keeps showing up for me, and what might it be teaching me?"
            className="px-4 py-4 mx-4 mb-4 rounded-lg text-cyan-light resize-none"
          ></textarea>
          <textarea
            name="prompt-4"
            id="prompt-4"
            rows={3}
            cols={45}
            placeholder="When did I last feel proud? When did I feel disappointed? What can I learn from these moments?"
            className="px-4 py-4 mx-4 mb-4 rounded-lg text-cyan-light resize-none"
          ></textarea>
          <textarea
            name="prompt-5"
            id="prompt-5"
            rows={3}
            cols={45}
            placeholder="Where in my life do I need to show myself more acceptance, and where do I feel motivated to make a change?"
            className="px-4 py-4 mx-4 mb-4 rounded-lg text-cyan-light resize-none"
          ></textarea>
          <textarea
            name="prompt-6"
            id="prompt-6"
            rows={3}
            cols={45}
            placeholder="Looking ahead, what is one goal or quality I want to focus on developing, and why does it matter to me?"
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

export default JournalSelfReflection;
