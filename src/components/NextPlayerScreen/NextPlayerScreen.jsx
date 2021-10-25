import React from "react";
import { useGameStore } from "../../context";
import "./NextPlayerScreen.scss";
const NextPlayerScreen = () => {
  const [{ currentSign }] = useGameStore();
  const [{ winner }] = useGameStore();
  return (
    <div className="next-player-screen">
      {winner
        ? "We already have the winner"
        : !currentSign
        ? "Waiting for the start of the game"
        : `Next step: ${currentSign === "X" ? "O" : "X"} `}
    </div>
  );
};

export default NextPlayerScreen;
