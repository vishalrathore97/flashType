import React from "react";
import "./TestLetter.css";

const TestLetter = ({ letterInfo }) => {
  const { status } = letterInfo;
  const testClass = {
    correct: "test-letter-correct",
    incorrect: "test-letter-incorrect",
    notAttempted: "test-letter-not-attempted",
  }[status];
  return (
    <span className={`test-letter ${testClass}`}>{letterInfo.testLetter}</span>
  );
};

export default TestLetter;
