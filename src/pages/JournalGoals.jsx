import { useState } from "react";
import { supabase } from "../Supabase/supabaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownWideShort,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";

const promptList = [
  "Imagine where you want to be a year from now. Describe that vision in as much detail as possible.",
  "List your top three goals right now. Why are these the most important to you, and how do they align with your core values?",
  "Pick one goal and break it into smaller, actionable steps you can take this week or month.",
  "What potential roadblocks might you encounter, and how can you prepare to overcome them?",
  "Identify what keeps you motivated—mentors, quotes, personal rewards—and outline a plan to use these consistently.",
  "What progress have you made on a current goal, and what adjustments, if any, do you need to make moving forward?",
];

export const JournalGoals = () => {
  const [prompt1, setPrompt1] = useState("");
  const [prompt2, setPrompt2] = useState("");
  const [prompt3, setPrompt3] = useState("");
  const [prompt4, setPrompt4] = useState("");
  const [prompt5, setPrompt5] = useState("");
  const [prompt6, setPrompt6] = useState("");

  const [loading, setLoading] = useState(false);

  const resetEntries = () => {
    setPrompt1("");
    setPrompt2("");
    setPrompt3("");
    setPrompt4("");
    setPrompt5("");
    setPrompt6("");
  };

  const handleSaveEntry = async (e) => {
    e.preventDefault();

    const mergedEntries = [
      promptList[0],
      prompt1,
      promptList[1],
      prompt2,
      promptList[2],
      prompt3,
      promptList[3],
      prompt4,
      promptList[4],
      prompt5,
      promptList[5],
      prompt6,
    ].join("\n");

    if (
      !prompt1.trim() &&
      !prompt2.trim() &&
      !prompt3.trim() &&
      !prompt4.trim() &&
      !prompt5.trim() &&
      !prompt6.trim()
    ) {
      alert("Please write something before saving.");
      return;
    }
    setLoading(true);

    const { data, error } = await supabase.from("journal_entries").insert({
      title: "Goals",
      content: mergedEntries,
      created_at: new Date().toISOString(),
    });

    setLoading(false);

    if (error) {
      console.error("Error saving journal entry:", error.message);
      alert("Could not save your entry. Please try again.");
    } else {
      alert("Entry saved successfully!");
      resetEntries();
    }
  };

  return (
    <>
      <h2 className="my-4 text-white">Eyes on the ball ...</h2>
      <form className="text-white" onSubmit={handleSaveEntry}>
        <p className="w-3/5 text-wrap">
          Focus on setting, tracking, and reflecting on personal or professional
          objectives.
        </p>
        <ul className="text-xs list-decimal mt-2 mb-4 leading-5">
          <li>
            <FontAwesomeIcon icon={faListUl} className="mr-2" />
            Start by brainstorming or listing out possible goals.
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowDownWideShort} className="mr-2" />
            Then choose a few to break down into actionable steps.
          </li>
        </ul>
        <div className="grid gap-2 lg:grid-cols-2 sm:grid-cols-1">
          <textarea
            name="prompt-1"
            id="prompt-1"
            rows={3}
            cols={45}
            placeholder={`${promptList[0]}`}
            className="px-4 py-4  mx-4 mb-4 rounded-lg text-cyan-light resize-none"
            value={prompt1}
            onChange={(e) => setPrompt1(e.target.value)}
            disabled={loading}
          ></textarea>
          <textarea
            name="prompt-2"
            id="prompt-2"
            rows={3}
            cols={45}
            placeholder={`${promptList[1]}`}
            className="px-4 py-4 mx-4 mb-4 rounded-lg text-cyan-light resize-none"
            value={prompt2}
            onChange={(e) => setPrompt2(e.target.value)}
            disabled={loading}
          ></textarea>
          <textarea
            name="prompt-3"
            id="prompt-3"
            rows={3}
            cols={45}
            placeholder={`${promptList[2]}`}
            className="px-4 py-4 mx-4 mb-4 rounded-lg text-cyan-light resize-none"
            value={prompt3}
            onChange={(e) => setPrompt3(e.target.value)}
            disabled={loading}
          ></textarea>
          <textarea
            name="prompt-4"
            id="prompt-4"
            rows={3}
            cols={45}
            placeholder={`${promptList[3]}`}
            className="px-4 py-4 mx-4 mb-4 rounded-lg text-cyan-light resize-none"
            value={prompt4}
            onChange={(e) => setPrompt4(e.target.value)}
            disabled={loading}
          ></textarea>
          <textarea
            name="prompt-5"
            id="prompt-5"
            rows={3}
            cols={45}
            placeholder={`${promptList[4]}`}
            className="px-4 py-4 mx-4 mb-4 rounded-lg text-cyan-light resize-none"
            value={prompt5}
            onChange={(e) => setPrompt5(e.target.value)}
            disabled={loading}
          ></textarea>
          <textarea
            name="prompt-6"
            id="prompt-6"
            rows={3}
            cols={45}
            placeholder={`${promptList[5]}`}
            className="px-4 py-4 mx-4 mb-4 rounded-lg text-cyan-light resize-none"
            value={prompt6}
            onChange={(e) => setPrompt6(e.target.value)}
            disabled={loading}
          ></textarea>
        </div>
        <div className="flex flex-row justify-between items-center">
          <button type="reset" className="mr-2 text-white text-sm font-medium">
            Discard
          </button>
          <button
            type="submit"
            className={`btn text-white bg-cyan-light ${loading} ? "animate-pulse"`}
          >
            {loading ? "Saving ..." : "Save"}
          </button>
        </div>
      </form>
    </>
  );
};

export default JournalGoals;
