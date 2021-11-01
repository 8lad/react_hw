import React, { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useAppStore } from "../../context";
import { useHistory } from "react-router";
import { createCompetition } from "../../functoins";
import { addNewCompetition } from "../../actions";
import "./CreateCompetition.scss";

const CreateCompetition = ({ title }) => {
  const [competitionName, setCompetitionName] = useState("");
  const [, dispatch] = useAppStore();
  const history = useHistory();
  const clearInputs = () => {
    setCompetitionName("");
  };

  return (
    <>
      <form className="create-competition">
        <h1>{title}</h1>
        <Input
          labelText="Competition name"
          id="competition-name"
          placeholder="Enter competition name..."
          onChange={(e) => setCompetitionName(e.target.value)}
          value={competitionName}
        />
        <Button
          text="Create"
          className="main-button"
          onClick={(e) => {
            e.preventDefault();
            if (competitionName) {
              dispatch(addNewCompetition(createCompetition(competitionName)));
              clearInputs();
              history.push("/");
            }
          }}
        />
      </form>
    </>
  );
};

export default CreateCompetition;
