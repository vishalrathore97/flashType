import React from "react";
import TestLetter from "../TestLetter/TestLetter";
import "./TypingChallengeMain.css";

const TypingChallengeMain = ({
  onInputChange,
  timerStarted,
  timeRemaining,
  testInfo,
}) => {
  return (
    <div className="main-typing-section">
      <div className="timer">
        <p className="timer-text">
          {timeRemaining < 10 ? `00:0${timeRemaining}` : `00:${timeRemaining}`}
        </p>
        {!timerStarted && (
          <p className="timer-info">Start typing to start the test.</p>
        )}
      </div>
      <div className="textarea-section">
        <div className="textarea-left">
          <div className="test-para textarea">
            {testInfo.map((letterInfo, index) => (
              <TestLetter key={index} letterInfo={letterInfo} />
            ))}
          </div>
        </div>
        <div className="textarea-right">
          <textarea
            onPaste={(e) => {
              e.preventDefault();
              return false;
            }}
            onChange={(e) => onInputChange(e.target.value)}
            className="textarea"
            placeholder="Start Typing Here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TypingChallengeMain;
