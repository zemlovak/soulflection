import { useState } from "react";
import { supabase } from "../Supabase/supabaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLungs, faTree } from "@fortawesome/free-solid-svg-icons";

const promptList = [
  "List what you can see, hear, feel, smell, and taste right now. How does this focus on your senses help you feel more grounded?",
  "Starting at your head and moving down to your toes, note any sensations (tightness, warmth, tingling) and how they shift as you focus on them.",
  "Pause and take five slow, deep breaths. Describe how your breath feels entering and leaving your body, and any change in your mindset afterward.",
  "Imagine or recall a peaceful natural setting. Describe its colors, sounds, and atmosphere. How does picturing this environment affect your mood?",
  "Visualize a place (real or imagined) where you feel completely safe. What elements make you feel protected or at ease in this place?",
  "What single action can you focus on right now (e.g., sipping tea, stretching) to fully immerse yourself in the present?",
];

export const JournalGrounding = () => {
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

    if (!prompt1.trim() && !prompt2.trim() && !prompt3.trim() && !prompt4.trim() && !prompt5.trim() && !prompt6.trim()) {
      alert("Please write something before saving.");
      return;
    }
    setLoading(true);

    const { data, error } = await supabase.from("journal_entries").insert({
      title: "Grounding",
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
      <h2 className="my-4 text-white">Embrace the present ...</h2>
      <form className="text-white" onSubmit={handleSaveEntry}>
        <p className="w-3/5 text-wrap">
          Anchor yourself in the present moment to cultivate calmness and reduce
          anxiety. Use these exercises to enhance your mindfulness and
          awareness.
        </p>
        <ul className="text-xs list-decimal mt-2 mb-4 leading-5">
          <li>
            <FontAwesomeIcon icon={faLungs} className="mr-2" />
            Begin with a few deep breaths to center your focus.
          </li>
          <li>
            <FontAwesomeIcon icon={faTree} className="mr-2" />
            Visualize a peaceful natural setting to soothe your mind.
          </li>
          <li>
            <FontAwesomeIcon icon={faEye} className="mr-2" />
            Engage your senses by observing what you can see, hear, feel, smell,
            and taste.
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

export default JournalGrounding;
