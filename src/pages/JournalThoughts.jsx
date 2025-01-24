import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStopwatch,
  faTextSlash,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

import { supabase } from "../Supabase/supabaseClient";
import { useAuth } from "../context/AuthContext";

import { Timer } from "../components/Timer";
import "./JournalThoughts.css";

export const JournalThoughts = () => {
  const [thoughtsEntry, setThoughtsEntry] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSaveEntry = async (e) => {
    e.preventDefault();
    if (!thoughtsEntry.trim()) {
      alert("Please write something before saving.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.from("journal_entries").insert({
      title: "Journal Thoughts",
      content: thoughtsEntry,
      created_at: new Date().toISOString(),
    });

    setLoading(false);

    if (error) {
      console.error("Error saving journal entry:", error.message);
      alert("Could not save your entry. Please try again.");
    } else {
      setThoughtsEntry("");
      alert("Entry saved successfully!");
    }
  };

  return (
    <>
      <h2 className="my-4 text-white">Share your thoughts ...</h2>
      <form className="text-white" onSubmit={handleSaveEntry}>
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
        <div className="relative">
          <textarea
            name="automatic-writing"
            id="automatic-writing"
            rows={7}
            cols={65}
            placeholder="What's the very first thing that pops into your mind?"
            className="w-full px-4 py-4 rounded-lg text-cyan-light resize-none"
            value={thoughtsEntry}
            onChange={(e) => setThoughtsEntry(e.target.value)}
            disabled={loading}
          ></textarea>
          <Timer bottom={4} left={2}/>
        </div>
        <div className="flex flex-row justify-between items-center">
          <button
            type="reset"
            className="mr-2 text-white text-sm font-medium"
            onClick={() => setEntry("")}
          >
            Discard
          </button>
          <button
            type="submit"
            className={`btn text-white bg-cyan-light ${loading} ? "animate-pulse"`}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </>
  );
};

export default JournalThoughts;
