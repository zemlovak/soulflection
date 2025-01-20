import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../Supabase/supabaseClient";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
};

const titleStyleMap = {
  "Journal Thoughts": " bg-cyan-light text-white",
  "Self-reflection": "bg-cyan-ultradark bg-opacity-50 text-white",
  "Emotional Processing": "bg-cyan-dark text-white",
  Goals: "bg-cyan-ultradark text-white",
  Grounding: "bg-black bg-opacity-50 text-white",
};

export const JournalTile = () => {
  const [journalEntries, setJournalEntries] = useState([]);
  const [error, setError] = useState("");
  const { user, userUrl } = useAuth();

  useEffect(() => {
    if (!user) return;

    const getJournalEntries = async () => {
      const { data: journalData, error: journalError } = await supabase
        .from("journal_entries")
        .select()
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(4);

      if (journalError) {
        console.error("Error fetching journal entries:", journalError);
        setError("Failed to fetch journal entries.");
      } else {
        setJournalEntries(journalData || []);
      }
    };

    getJournalEntries();
  }, []);

  return (
    <div className="flex flex-col justify-start items-center lg:col-span-2 bg-cyan-ultradark bg-opacity-50 rounded-xl pt-4 px-4 pb-4 sm:pb-8 relative bookmark">
      <div className="w-full text-right mb-2 mr-4">
        <Link to={`/${userUrl}/journal`}>
          <button className="btn bg-white text-cyan-ultradark">
            <FontAwesomeIcon icon={faPenToSquare} /> New
          </button>
        </Link>
      </div>
      {error ? (
        <p>{error}</p>
      ) : (
        journalEntries.map((entry) => (
          <div
            key={entry.id}
            className="w-full mb-2 max-h-12 overflow-hidden text-left"
          >
            <div className="flex justify-start items-center">
              <div className="font-medium text-lg">
                {formatDate(entry.created_at)}
              </div>
              <div
                key={entry.id}
                className={`ml-4 px-2 rounded-md ${
                  titleStyleMap[entry.title] ?? "bg-cyan-ultradark text-white"
                }`}
              >
                {entry.title}
              </div>
            </div>{" "}
            <p key={entry.id}>{entry.content.substring(0, 68)} ...</p>
          </div>
        ))
      )}
    </div>
  );
};

export default JournalTile;
