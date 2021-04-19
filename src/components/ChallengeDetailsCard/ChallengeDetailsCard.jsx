import React from "react";
import "./ChallengeDetailsCard.css";

const ChallengeDetailsCard = ({ cardName, cardValue }) => {
  return (
    <div className="card">
      <p className="card-name">{cardName}</p>
      <p className="card-value">{cardValue}</p>
    </div>
  );
};

export default ChallengeDetailsCard;
