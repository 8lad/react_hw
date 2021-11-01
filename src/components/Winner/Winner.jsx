import React, { useState, useMemo } from "react";
import Button from "../UI/Button/Button";
import { useAppStore } from "../../context";
import { findWinner } from "../../actions";
import { useHistory } from "react-router";
import "./Winner.scss";
const Winner = ({ participants, winner, competitionId }) => {
  const [isWinner, setIsWinner] = useState(false);
  const [, dispatch] = useAppStore();
  const currentAmount = useMemo(() => participants.length, [participants]);
  const history = useHistory();
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
              dispatch(findWinner(competitionId));
              history.push("/");
            }}
          />
        </>
      )}
    </div>
  );
};

export default Winner;
