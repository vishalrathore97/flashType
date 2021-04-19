import React from "react";
import "./TryAgain.css";

const TryAgain = ({ words, characters, wpm, onRetry }) => {
  return (
    <div className="try-container">
      <h1>Test Results</h1>
      <div className="test-results">
        <p>
          <b>Words : </b>
          {words}
        </p>
        <p>
          <b>Characters : </b>
          {characters}
        </p>
        <p>
          <b>Speed : </b>
          {wpm}wpm
        </p>
      </div>
      <div className="button-container">
        <button onClick={() => onRetry()} className="end-buttons try-btn">
          Re-Try
        </button>
        <button
          onClick={() => {
            window.open(
              "https://www.facebook.com/sharer/sharer.php?u=https://github.com/vishalrathore97?tab=repositories",
              "facebook-share-dialog",
              "height=600,weight=700"
            );
          }}
          className="end-buttons share-btn"
        >
          Share
        </button>
        <button
          onClick={() => {
            window.open(
              "https://www.twitter.com/intent/tweet?text=https://github.com/vishalrathore97?tab=repositories",
              "twwet-share-dialog",
              "height=600,weight=700"
            );
          }}
          className="end-buttons tweet-btn"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TryAgain;
