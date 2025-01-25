import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Modal } from "./Modal";
import { addHours, addMinutes, format } from "date-fns";
import { enUS } from "date-fns/locale";

import { supabase } from "../../Supabase/supabaseClient";
import { useAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCalendar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { locale } from "dayjs";

export const CalendarTile = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const onClose = () => setIsModalOpen(false);

  useEffect(() => {
    if (!user) return;

    const getEvents = async () => {
      const { data: eventsData, error: eventsError } = await supabase
        .from("events")
        .select()
        .eq("user_id", user.id)
        .order("date")
        .order("time")
        .limit(4);

      if (eventsError) {
        console.error("Error fetching events:", eventsError);
        setError("Failed to load your events. Refresh to try again.");
      } else {
        setEvents(eventsData || []);
      }
    };

    getEvents();
  }, [!isModalOpen]);

  return (
    <>
      <div className=" bg-cyan-ultradark bg-opacity-50 rounded-xl pt-4 px-4 pb-4 sm:pb-8 overflow-hidden">
        <div className="w-full flex justify-between items-center mb-4 mr-4">
          <div>
            <FontAwesomeIcon icon={faBell} /> Up next
          </div>
          <Link>
            <button
              className="btn bg-white text-cyan-ultradark"
              onClick={() => setIsModalOpen(true)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </Link>

          <Modal show={isModalOpen} onClose={onClose}>
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
          </Modal>
        </div>
        <ol>
          {!events ? (
            <p>
              Loadong <span className="animate-pulse">...</span>
            </p>
          ) : (
            events.map((event) => (
              <li key={event.id}>
                <hr />
                <div key={event.id}>
                  <FontAwesomeIcon icon={faCalendar} />
                  <time>
                    {" "}
                    {format(new Date(event.date), "iii MMM do, yyyy,")}{" "}
                    {event.time}
                  </time>
                  <p key={event.id} className="font-bold font-lg mb-2">
                    {event.title}
                  </p>
                </div>
              </li>
            ))
          )}
          <hr />
        </ol>
      </div>
    </>
  );
};

export default CalendarTile;
