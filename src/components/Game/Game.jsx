import React from "react";
import "./Game.scss";
import Board from "../Board/Board";
import { useGameStore } from "../../context";
import { getSignTurn, calculateWinner, addWinnersToLocal } from "../../utils";
import {
  addToHistory,
  setWinner,
  setCurrentSign,
  setWinnerToStore,
} from "../../actions";

export default function Game() {
  const [{ history }, dispatch] = useGameStore();
  const [{ isXTurn }] = useGameStore();
  const [{ allWinners }] = useGameStore();
  const currentStep = history[history.length - 1];
  const handleClick = (i) => {
    const squares = [...currentStep.squares];
    squares[i] = getSignTurn(history.length, isXTurn);
    const winner = calculateWinner(squares);

    dispatch(addToHistory(squares));
    dispatch(setCurrentSign(squares[i]));

    if (winner) {
      dispatch(setWinner(winner));
      dispatch(setWinnerToStore(winner, new Date()));
      addWinnersToLocal(allWinners);
    }
  };

  return (
    <div className="game">
      <Board squares={currentStep.squares} onClick={handleClick} />
    </div>
  );
}
