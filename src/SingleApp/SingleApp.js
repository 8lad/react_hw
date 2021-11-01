import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import Input from "../components/UI/Input/Input";
import UserCard from "../components/UserCard/UserCard";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import Winner from "../components/Winner/Winner";
import "./SingleApp.scss";

function SingleApp({ competition }) {
  const {
    competitionId,
    competitionName,
    winner,
    participants,
    isTimer,
    competitionStatus,
  } = competition;

  const [searching, setSearching] = useState("");

  const currentParticipants = useMemo(
    () =>
      participants.length >= 1
        ? participants.filter(
            (item) =>
              item.firstName.toLowerCase().includes(searching.toLowerCase()) ||
              item.id.includes(searching)
          )
        : null,
    [participants, searching]
  );
  return (
    <div className="single-app">
      <div className="titles-box">
        <Link to="/"> Go to the main page</Link>
        <h2>ID: {competitionId}</h2>
        <h2>Name: {competitionName}</h2>
        {competitionStatus === "Finished" ? (
          <>
            <h2>
              Winner: {winner.firstName} {winner.secondName}
            </h2>

            <h2> Time: {winner.timeForReading}</h2>
          </>
        ) : null}
      </div>

      <main>
        {currentParticipants ? (
          <>
            <Input
              placeholder={"Enter paticipiant name..."}
              id={"searching"}
              onChange={(e) => {
                setSearching(e.target.value);
              }}
              value={searching}
            />
            {currentParticipants.map((participant) => (
              <UserCard
                competitionId={competitionId}
                text={"Delete"}
                participant={participant}
                key={participant.id}
              />
            ))}
          </>
        ) : (
          <h2>
            This competition doesn't have any participant yet. You can be the
            first
          </h2>
        )}
      </main>
      <aside>
        <RegistrationForm
          title="Registration user"
          isTimer={isTimer}
          competitionId={competitionId}
        />
        {participants.length > 1 ? (
          <>
            <Winner
              participants={participants}
              winner={winner}
              competitionId={competitionId}
            />
          </>
        ) : null}
      </aside>
    </div>
  );
}

export default SingleApp;
