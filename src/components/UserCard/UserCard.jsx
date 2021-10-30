import React from "react";
import { useAppStore } from "../../context";
import { deleteParticipant } from "../../actions";
import "./UserCard.scss";
import Button from "../UI/Button/Button";

const UserCard = ({ participant, text }) => {
  const [, dispatch] = useAppStore();
  const { id, firstName, secondName, timeForReading } = participant;
  return (
    <div className="user-card">
      <div className="user-card-container">
        <div className="user-card-field">ID: {id}</div>
        <div className="user-card-field">First name: {firstName}</div>
        <div className="user-card-field">Second name: {secondName}</div>
        <div className="user-card-field">Time: {timeForReading}</div>
        <Button
          className="main-button"
          text={text}
          onClick={() => dispatch(deleteParticipant(id))}
        />
      </div>
    </div>
  );
};

export default UserCard;
