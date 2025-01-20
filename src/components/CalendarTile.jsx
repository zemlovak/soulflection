import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Modal } from "./Modal";
import { format } from 'date-fns';
import { cs } from 'date-fns/locale'; // Czech locale

import { supabase } from "../../supabaseClient";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCalendar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { locale } from "dayjs";


export const CalendarTile = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!user) return;

    const getEvents = async () => {
      const { data: eventsData, error: eventsError } = await supabase
        .from("events")
        .select()
        .eq("user_id", user.id)
        .order("date")
        .order("time")
        .limit(3);

      if (eventsError) {
        console.error("Error fetching events:", eventsError);
        setError("Failed to load your events. Refresh to try again.");
      } else {
        setEvents(eventsData || []);
      }
    };

    getEvents();
  }, []);


    
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

          <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
        <ol>
            {!events 
            ?(<p>Loadong <span className="animate-pulse">...</span></p>) 
            :(events.map((event) => <li key={event.id}>
                <hr />
                <div key={event.id}>
                  <FontAwesomeIcon icon={faCalendar} />
                  <time>
                    {" "}
                    {format(new Date(event.date), 'do MMM, yyyy,')} {event.time}
                  </time>
                  <p key={event.id} className="font-bold font-lg mb-2">{event.title}</p>
                </div>
            </li>)
           )
            }
       <hr />
        </ol>
      </div>
    </>
  );
};

export default CalendarTile;
