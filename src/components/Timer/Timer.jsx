import React, { useState, useMemo } from "react";
import useTimer from "../../hooks/useTimer";
import Button from "../UI/Button/Button";
import TimerScreen from "../TimerScreen/TimerScreen";
import { parseIntoTime, creatPersonalId } from "../../functoins";
import { useAppStore } from "../../context";
import { showTimer, addNewParticipant } from "../../actions/";
import "./Timer.scss";

function Timer({ firstName, secondName, clearInputs, competitionId, isTimer }) {
  const [start, setStart] = useState(false);
  const [, dispatch] = useAppStore();
  const [disableButton, setDisableButton] = useState(false);
  const [disableReset, setDisableReset] = useState(true);
  const [disableSave, setDisableSave] = useState(true);
  const participantId = useMemo(() => creatPersonalId(), [isTimer]);
  const { counter, setCounter } = useTimer(0, start);

  let currentParticipant = {
    id: participantId,
    firstName: firstName,
    secondName: secondName,
    timeInMiliseconds: counter * 10,
    timeForReading: parseIntoTime(counter),
  };

  const clearAndSave = () => {
    setStart(false);
    dispatch(showTimer(competitionId));
    setDisableButton(false);
    setDisableReset(true);
    setDisableSave(true);
    clearInputs();
    setCounter(0);
  };

  return isTimer ? (
    <div className="Timer">
      <h1>Participant</h1>
      <h2>ID: {participantId}</h2>
      <h2>Participant: {`${firstName} ${secondName}`}</h2>
      <TimerScreen time={counter} countingTime={parseIntoTime} />
      <div className="buttons">
        <Button
          className={"start"}
          text={"Start"}
          disabled={disableButton}
          onClick={(e) => {
            e.preventDefault();
            setStart(true);
            setDisableButton(true);
          }}
        />
        <Button
          disabled={!disableButton || !disableSave}
          className="stop"
          text="Stop"
          onClick={(e) => {
            e.preventDefault();
            setStart(false);
            setDisableSave(false);
            setDisableReset(false);
          }}
        />
        <Button
          disabled={disableReset}
          className="reset"
          text="Reset"
          onClick={(e) => {
            e.preventDefault();
            setStart(false);
            setDisableButton(false);
            setDisableSave(true);
            setDisableReset(true);
            setCounter(0);
          }}
        />
      </div>
      <Button
        className="main-button"
        text="CANCEL"
        onClick={(e) => {
          e.preventDefault();
          clearAndSave();
        }}
      />
      <Button
        className="main-button"
        text="SAVE"
        disabled={disableSave}
        onClick={(e) => {
          e.preventDefault();
          dispatch(addNewParticipant(currentParticipant, competitionId));
          clearAndSave();
        }}
      />
    </div>
  ) : null;
}

export default Timer;
