import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faHeart } from "@fortawesome/free-solid-svg-icons";

import "./JournalThoughts.css";


export const JournalSelfReflection = () => {
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
  }

  const handleSaveEntry = async (e) => {
    e.preventDefault();

    const mergedEntries = [
      prompt1,
      prompt2,
      prompt3,
      prompt4,
      prompt5,
      prompt6,
    ].join("\n");

    if (!mergedEntries.trim()) {
      alert("Please write something before saving.");
      return;
    }
    setLoading(true);

    const { data, error } = await supabase.from("journal_entries").insert({
      title: "Self-reflection",
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
      <h2 className="my-4 text-white">Time to self-reflect ...</h2>
      <form className="text-white" onSubmit={handleSaveEntry}>
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
            value={prompt1}
            onChange={(e) => setPrompt1(e.target.value)}
            disabled={loading}
          ></textarea>
          <textarea
            name="prompt-2"
            id="prompt-2"
            rows={3}
            cols={45}
            placeholder="In which area of my life do I feel I've grown the most recently, and what sparked that growth?"
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
            placeholder="What recurring thought, behavior, or situation keeps showing up for me, and what might it be teaching me?"
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
            placeholder="When did I last feel proud? When did I feel disappointed? What can I learn from these moments?"
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
            placeholder="Where in my life do I need to show myself more acceptance, and where do I feel motivated to make a change?"
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
            placeholder="Looking ahead, what is one goal or quality I want to focus on developing, and why does it matter to me?"
            className="px-4 py-4 mx-4 mb-4 rounded-lg text-cyan-light resize-none"
            value={prompt6}
            onChange={(e) => setPrompt6(e.target.value)}
            disabled={loading}
          ></textarea>
        </div>
        <div className="flex flex-row justify-between items-center">
          <button
            type="reset"
            className="mr-2 text-white text-sm font-medium"
            onClick={resetEntries}
          >
            Discard
          </button>
          <button
            type="submit"
            className={`btn text-white bg-cyan-light ${loading} ? "animate-pulse"`}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </>
  );
};

export default JournalSelfReflection;
