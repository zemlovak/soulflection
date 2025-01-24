import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { supabase } from "../../Supabase/supabaseClient";

import "./Modal.css";

export const Modal = ({ show, onClose }) => {
  if (!show) return null;

  const [calendarEvent, setCalendarEvent] = useState("");
  const [loading, setLoading] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [eventTime, setEventTime] = useState(
    `${new Date().getHours()}:${new Date().getMinutes()}`
  );

  const clearEvent = () => {
    setEventTitle("");
    setEventDate(new Date().toISOString().split("T")[0]);
    setEventTime(`${new Date().getHours()}:${new Date().getMinutes()}`);
    setCalendarEvent("");
  };

  const handleSaveEvent = async (e) => {
    e.preventDefault();
    if (!eventTitle.trim()) {
      alert("Please enter an event title before saving.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.from("events").insert({
      title: eventTitle,
      date: eventDate,
      time: eventTime,
      description: calendarEvent,
      created_at: new Date().toISOString(),
    });

    setLoading(false);

    if (error) {
      console.error("Error saving event:", error.message);
      alert("Could not save your event. Please try again.");
    } else {
      clearEvent();
      alert("Event saved successfully!");
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />

      <div className="relative bg-transparent bg-opacity-95 rounded-lg max-w-2xl w-full p-10 z-20">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-white hover:text-cyan-light"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        <div className="bg-cyan-dark bg-opacity-95 w-full p-6 rounded-lg ">
          <>
            <h2 className="my-4 text-6xl">Plan your next mindful moment ...</h2>
            <form className="w-full" onSubmit={handleSaveEvent}>
              <p className="text-base my-4"></p>
              <p className="text-sm font-light w-4/5">
                Schedule a journaling, meditation, breathwork, or yoga session
                to keep your practice on track.
              </p>
              <div className="w-full mt-8">
                <label htmlFor="event-title" className="form-label">
                  Title
                </label>
                <input
                  className="form-field !bg-white !text-cyan-ultradark"
                  type="text"
                  placeholder="Enter event title"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                />
              </div>
              <div className="mt-4 w-full flex justify-between">
                <div className="w-full mr-6">
                  <label htmlFor="event-date" className="form-label">
                    Date
                  </label>
                  <input
                    className="form-field !bg-white !text-cyan-ultradark"
                    type="date"
                    placeholder={`${new Date().toISOString().split("T")[0]}`}
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="event-time" className="form-label">
                    Time
                  </label>
                  <input
                    className="form-field !bg-white !text-cyan-ultradark"
                    type="time"
                    placeholder={`${new Date().getHours()}:${new Date().getMinutes()}`}
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                  />
                </div>
              </div>
              <div className="relative mt-4">
                <label className="form-label">Description</label>
                <textarea
                  name="event-description"
                  id="event-description"
                  rows={3}
                  cols={10}
                  placeholder="Enter event description (optional)"
                  className="w-full px-4 py-4 rounded-lg text-cyan-dark bg-white resize-none"
                  value={calendarEvent}
                  onChange={(e) => setCalendarEvent(e.target.value)}
                  disabled={loading}
                ></textarea>
              </div>
              <div className="flex flex-row justify-between items-center">
                <button
                  type="reset"
                  className="mr-2 text-white text-sm font-medium"
                  onClick={clearEvent}
                >
                  Discard
                </button>
                <button
                  type="submit"
                  className={`btn text-white bg-cyan-light ${
                    loading ? "animate-pulse" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </>
        </div>
      </div>
    </div>
  );
};

export default Modal;
