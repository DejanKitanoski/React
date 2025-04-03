import React, { useState } from "react";
import MoodSelector from "./MoodSelector";
import MoodDisplay from "./MoodDisplay";

const MoodTracker = () => {
  const [mood, setMood] = useState("");

  return (
    <div >
      <h1 >Mood Tracker</h1>
      <MoodSelector setMood={setMood} />
      <MoodDisplay mood={mood} />
    </div>
  );
};

export default MoodTracker;
