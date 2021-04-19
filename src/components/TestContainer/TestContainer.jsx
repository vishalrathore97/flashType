import React, { useEffect, useState } from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import { SAMPLE_PARAGRAPHS } from "./../../data/samplePara";
import "./TestContainer.css";

const totalTime = 60;

const TestContainer = () => {
  const [testInfo, setTestInfo] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(totalTime);
  const [selectedPara, setSelectedPara] = useState("hi");

  useEffect(() => {
    if (selectedPara === "hi") {
      const randomPara =
        SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];
      const letterArr = randomPara.split("");
      const testInfo = letterArr.map((l) => {
        return { testLetter: l, status: "notAttempted" };
      });
      setSelectedPara(randomPara);
      setTestInfo(testInfo);
    }
    let timer;
    if (timerStarted) {
      timer = setInterval(() => {
        if (timeRemaining > 0) {
          const timeSpent = totalTime - timeRemaining;
          let wordPerMin;
          if (timeSpent > 0) {
            wordPerMin = parseInt((words / timeSpent) * 60);
            setWpm(wordPerMin);
          }
          setTimeRemaining((prevTime) => prevTime - 1);
        } else {
          clearInterval(timer);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timeRemaining, timerStarted]);

  const handleInputChange = (input) => {
    if (!timerStarted) {
      setTimerStarted(true);
    }
    const characters = input.length;
    let correctCharacters = 0;
    const index = characters - 1;
    const testInfoDup = [...testInfo];
    let statuses = "";
    for (let i = 0; i < selectedPara.length; i++) {
      if (testInfoDup[i].testLetter === " ") {
        testInfoDup[i].status = "space";
      } else if (i <= index) {
        testInfoDup[i].status =
          input[i] === selectedPara[i] ? "correct" : "incorrect";
      } else {
        testInfoDup[i].status = "notAttempted";
      }
      statuses += testInfoDup[i].status;
      if (testInfoDup[i].status === "correct") correctCharacters++;
    }
    const wordsArr = statuses.split("space");
    const correctWords = wordsArr.reduce((total, next) => {
      if (next.search(/(incorrect|notAttempted)/) === -1) {
        total++;
      }
      return total;
    }, 0);
    setTestInfo(testInfoDup);
    setWords(correctWords);
    setCharacters(correctCharacters);
    const isDone = !testInfoDup.some((obj) =>
      ["incorrect", "notAttempted"].includes(obj.status)
    );
    if (isDone) setIsCompleted(true);
  };

  const handleRetry = () => {
    fetchNewPara();
    setCharacters(0);
    setWords(0);
    setWpm(0);
    setIsCompleted(false);
    setTimerStarted(false);
    setTimeRemaining(60);
  };

  const fetchNewPara = () => {
    const randomPara =
      SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];
    const letterArr = randomPara.split("");
    const testInfo = letterArr.map((l) => {
      return { testLetter: l, status: "notAttempted" };
    });
    setSelectedPara(randomPara);
    setTestInfo(testInfo);
  };

  return (
    <div className="test-container">
      {timeRemaining && !isCompleted > 0 ? (
        <TypingChallenge
          wpm={wpm}
          words={words}
          characters={characters}
          timerStarted={timerStarted}
          timeRemaining={timeRemaining}
          selectedPara={selectedPara}
          testInfo={testInfo}
          onInputChange={handleInputChange}
        />
      ) : (
        <div className="try-again-section">
          <TryAgain
            wpm={wpm}
            words={words}
            characters={characters}
            onRetry={handleRetry}
          />
        </div>
      )}
    </div>
  );
};

export default TestContainer;
