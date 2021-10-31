import React, { useState, useMemo } from "react";
import Button from "../UI/Button/Button";
import { useAppStore } from "../../context";
import { findWinner } from "../../actions";
import "./Winner.scss";
const Winner = () => {
  const [isWinner, setIsWinner] = useState(false);
  const [{ participants, winner }, dispatch] = useAppStore();
  const currentAmount = useMemo(() => participants.length, [participants]);
  return (
    <div className="winner">
      {isWinner ? (
        <>
          <h2>The winner</h2>
          <div className="user-card-field">ID: {winner.id}</div>
          <div className="user-card-field">First name: {winner.firstName}</div>
          <div className="user-card-field">
            Second name: {winner.secondName}
          </div>
          <div className="user-card-field">Time: {winner.timeForReading}</div>
        </>
      ) : (
        <>
          <h2>Total participants: {currentAmount}</h2>
          <Button
            className="main-button"
            text="Show winner"
            onClick={() => {
              setIsWinner((isWinner) => !isWinner);
              dispatch(findWinner());
            }}
          />
        </>
      )}
    </div>
  );
};

export default Winner;
