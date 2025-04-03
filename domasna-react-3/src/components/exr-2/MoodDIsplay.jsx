import React from "react";

const moodEmojiMap = {
  Happy: "😊",
  Sad: "😢",
  Excited: "🤩",
  Tired: "😴",
};

const MoodDisplay = ({ mood }) => {
  return (
    <div >
      {mood ? (
        <p>
          Current Mood: {mood} {moodEmojiMap[mood]}
        </p>
      ) : (
        <p>Select a mood</p>
      )}
    </div>
  );
};

export default MoodDisplay;
