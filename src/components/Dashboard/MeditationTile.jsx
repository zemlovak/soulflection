

export const MeditationTile = () => {
    return (
        <div className="flex flex-col justify-between items-center bg-cyan-ultradark bg-opacity-50 rounded-xl px-4 py-4 sm:py-8">
          <p>You're on a</p>
          <p className="text-bold text-4xl mx-4">
            <strong>10 day</strong>
          </p>
          <p>meditation streak</p>
          <p className="text-xl">Keep it up!</p>
        </div>
    );
}
 
export default MeditationTile;