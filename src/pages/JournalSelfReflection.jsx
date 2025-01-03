import React from "react";

export const JournalSelfReflection = () => {
  return (
    <><label htmlFor="grateful">What are you grateful for today?</label>
      <textarea
        name="grateful"
        id="grateful"
        rows={5}
        placeholder="Write three things you’re grateful for today."
        className="w-full px-4 py-4 rounded-t-none rounded-lg text-cyan-light"
      ></textarea>

      <textarea
        name="best-moment"
        id="best-moment"
        rows={5}
        placeholder="Reflect on the highlight of your day and why it stood out."
        className="w-full px-4 py-4 rounded-t-none rounded-lg text-cyan-light"
      ></textarea>

      <textarea
        name="smile-text"
        id="smile-text"
        rows={5}
        cols={65}
        placeholder="What are you grateful for today?"
        className="w-full px-4 py-4 rounded-t-none rounded-lg text-cyan-light"
      ></textarea>

      <textarea
        name="smile-text"
        id="smile-text"
        rows={5}
        cols={65}
        placeholder="What are you grateful for today?"
        className="w-full px-4 py-4 rounded-t-none rounded-lg text-cyan-light"
      ></textarea>

      <div className="flex flex-row justify-between items-center">
        <button className="mr-2 text-cyan-ultradark text-sm font-medium">
          Discard
        </button>
        <button className="btn text-white bg-cyan-light">Save</button>
      </div>
    </>
  );
};

export default JournalSelfReflection;
