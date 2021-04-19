import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallengeMain from "../TypingChallengeMain/TypingChallengeMain";
import "./TypingChallenge.css";

const TypingChallenge = ({
  words,
  characters,
  wpm,
  selectedPara,
  timerStarted,
  timeRemaining,
  testInfo,
  onInputChange,
}) => {
  return (
    <div className="typing-challenge-container">
      <div className="details-card-container">
        <ChallengeDetailsCard cardName="Words" cardValue={words} />
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
        <ChallengeDetailsCard cardName="Speed(wpm)" cardValue={wpm} />
      </div>

      <TypingChallengeMain
        timerStarted={timerStarted}
        timeRemaining={timeRemaining}
        selectedPara={selectedPara}
        testInfo={testInfo}
        onInputChange={onInputChange}
      />
    </div>
  );
};

export default TypingChallenge;
