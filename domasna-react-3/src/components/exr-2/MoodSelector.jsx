import React from "react";

const moodEmojiMap = {
  Happy: "😊",
  Sad: "😢",
  Excited: "🤩",
  Tired: "😴",
};

const MoodSelector = ({ setMood }) => {
  return (
    <div >
      {Object.keys(moodEmojiMap).map((mood) => (
        <button
          key={mood}
          onClick={() => setMood(mood)}
         
        >
          {mood}
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;