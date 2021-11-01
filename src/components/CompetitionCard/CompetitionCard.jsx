import React from "react";
// import { useAppStore } from "../../context";
import "./CompetitionCard.scss";
import Button from "../UI/Button/Button";
import { useHistory } from "react-router";

const UserCard = ({ competition, text }) => {
  // const [, dispatch] = useAppStore();
  const history = useHistory();
  const { competitionId, competitionName, winner, competitionStatus } =
    competition;
  return (
    <div className="competition-card">
      <div className="competition-card-container">
        <div className="competition-card-field">ID: {competitionId}</div>
        <div className="competition-card-field">Name: {competitionName}</div>
        <div className="competition-card-field">
          Status: {competitionStatus}
        </div>
        {competitionStatus === "Finished" ? (
          <div className="competition-card-field">
            Winner: {winner.firstName} {winner.secondName}
          </div>
        ) : null}
        <Button
          className="main-button"
          text={text}
          onClick={() => history.push(`/competition/:${competitionId} `)}
        />
      </div>
    </div>
  );
};

export default UserCard;
