import { useState, useEffect } from "react";
import { supabase } from "../../Supabase/supabaseClient";
import { useAuth } from "../../context/AuthContext";

export const MeditationTile = () => {
  const { user } = useAuth();
  const [logsData, setLogsData] = useState([]);

  useEffect(() => {
    const getStreakData = async () => {
      const { data: meditationLogsData, error: meditationLogsError } =
        await supabase
          .from("meditation-logs")
          .select("date")
          .eq("user_id", user.id)
          .order("date", { ascending: false });

      if (meditationLogsError) {
        console.error(meditationLogsError.message);
        return [];
      }
      setLogsData(meditationLogsData);
    };

    getStreakData();
  }, []);

  const calculateStreak = () => {
    if (!logsData || logsData.length === 0) return 0;

    let streak = 1;
    for (let i = 1; i < logsData.length; i++) {
      const currentDate = new Date(logsData[i].date);
      const previousDate = new Date(logsData[i - 1].date);

      const differenceInTime = previousDate.getTime() - currentDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);

      if (differenceInDays === 1) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  };

  const streak = calculateStreak();
  let streakMessage;
  if (streak === 0) {
    streakMessage = `You haven't meditated yet. Start today for a fresh beginning!`;
  } else if (streak < 7) {
    streakMessage = "Great start—keep going!";
  } else if (streak < 30) {
    streakMessage = "You're building a solid habit. Fantastic consistency!";
  } else {
    streakMessage = "You're unstoppable! Keep up the amazing practice.";
  }

  return (
    <div className="flex flex-col justify-between items-center bg-cyan-ultradark bg-opacity-50 rounded-xl px-4 py-4 sm:py-8">
      <p>You're on a</p>
      <p className="text-bold text-4xl mx-2">
        <strong>{streak} day</strong>
      </p>
      <p>meditation streak</p>
      <p className="text-sm text-center">{streakMessage}</p>
    </div>
  );
};

export default MeditationTile;
