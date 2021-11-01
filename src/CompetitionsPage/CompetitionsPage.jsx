import React from "react";
import { Route } from "react-router-dom";
import { useAppStore } from "../context";
import SingleApp from "../SingleApp/SingleApp";

const CompetitionsPage = () => {
  const [{ competitions }] = useAppStore();
  return (
    <>
      {competitions.map((competition) => (
        <Route
          exact
          path={`/competition/:${competition.competitionId} `}
          key={competition.competitionId}
        >
          <SingleApp competition={competition} />
        </Route>
      ))}
    </>
  );
};

export default CompetitionsPage;
