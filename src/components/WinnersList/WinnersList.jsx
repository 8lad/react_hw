import React from "react";
import { useGameStore } from "../../context";
import "./WinnersList.scss";
const WinnersList = () => {
  const [{ allWinners }] = useGameStore();
  return (
    <div className="winner-list">
      <h2>Winners list:</h2>
      <ul>
        {allWinners.length >= 1
          ? allWinners.map((item) => {
              return (
                <li key={item.date}>
                  The winner is {item.winner}. Date: {item.date}
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default WinnersList;
