import "./Dashboard.css";

import UserGreeting from "../components/Dashboard/UserGreeting";
import CalendarTile from "../components/Dashboard/CalendarTile";
import MoonPhaseTile from "../components/Dashboard/MoonPhaseTile";
import MeditationTile from "../components/Dashboard/MeditationTile";
import JournalTile from "../components/Dashboard/JournalTile";
import BreathworkTile from "../components/Dashboard/BreathworkTile";
import QuotesTile from "../components/Dashboard/QuotesTile";

export const Dashboard = () => { 

  return (
    <>
      <UserGreeting />
      <div className="px-8 py-8 mb-8 sm:px-12 bg-cyan-dark bg-opacity-25 rounded-xl grid gap-4 lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-3 text-white">
        <MoonPhaseTile />
        <MeditationTile />
        <JournalTile />
        <CalendarTile />
        <BreathworkTile />
        <QuotesTile />
      </div>
    </>
  );
};

export default Dashboard;
