import MorphingShape from "../components/Morph";
import Timer from "../components/Timer";

export const MeditationTimer = () => {
  
  return (
    <>
      <MorphingShape />
      <Timer buttonDown={true}/>
    </>
  );
};

export default MeditationTimer;
