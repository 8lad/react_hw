import React from "react";
import Steps from "../Steps/Steps";
import Game from "../Game/Game";
import Button from "../Button/Button";
import WinnersList from "../WinnersList/WinnersList";
import NextPlayerScreen from "../NextPlayerScreen/NextPlayerScreen";
import { useGameStore } from "../../context";
import {
  startNewGame,
  setFirstSign,
  setCurrentSign,
  setWinner,
  setWinnerToStore,
} from "../../actions";
import { randomBoolean, addWinnersToLocal } from "../../utils";
import "./MainContainer.scss";

const MainContainer = () => {
  const [{ winner }, dispatch] = useGameStore();
  const [{ history }] = useGameStore();
  const [{ currentSign }] = useGameStore();
  const [{ allWinners }] = useGameStore();
  const disableButton = history.length > 1;
  const handleStartNew = () => {
    dispatch(startNewGame());
    dispatch(setCurrentSign(null));
  };

  const handleGiveUp = (currentSign) => {
    dispatch(setWinner(currentSign));
  };

  const handleSetSign = (firstSign) => {
    dispatch(setFirstSign(firstSign));
  };

  return (
    <div className="main-container">
      {winner ? <h1>The winner is: {winner}</h1> : null}

      <Button
        disabled={disableButton}
        text="X"
        onClick={() => {
          handleSetSign(true);
        }}
      />
      <Button
        disabled={disableButton}
        text="X || O"
        onClick={() => {
          handleSetSign(randomBoolean());
        }}
      />
      <Button
        disabled={disableButton}
        text="O"
        onClick={() => {
          handleSetSign(false);
        }}
      />
      <NextPlayerScreen />
      <Game />
      <Steps />
      <Button
        text="Start new game"
        onClick={handleStartNew}
        disabled={!winner}
      />
      <Button
        text="Give up"
        onClick={() => {
          handleGiveUp(currentSign);
          dispatch(setWinnerToStore(currentSign, new Date()));
          dispatch(setWinner(currentSign));
          addWinnersToLocal(allWinners);
        }}
        disabled={winner}
      />
      <WinnersList />
    </div>
  );
};

export default MainContainer;
