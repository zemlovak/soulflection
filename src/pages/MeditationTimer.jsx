import MorphingShape from "../components/Morph";
import Timer from "../components/Timer";
import { useState } from "react";

export const MeditationTimer = () => {
  
  return (
    <>
      <MorphingShape />
      <Timer bottom={4} left={48} buttonDown={true}/>
    </>
  );
};

export default MeditationTimer;
