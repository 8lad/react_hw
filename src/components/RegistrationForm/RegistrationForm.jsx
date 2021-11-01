import React, { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Timer from "../Timer/Timer";
import { useAppStore } from "../../context";
import { showTimer } from "../../actions/";
import "./RegistrationForm.scss";
const RegistrationForm = ({ title, competitionId, isTimer }) => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [, dispatch] = useAppStore();
  const clearInputs = () => {
    setFirstName("");
    setSecondName("");
  };

  return (
    <>
      <form className="registration-form">
        <h1>{title}</h1>
        <Input
          labelText="First name"
          id="first-name"
          placeholder="Enter first name..."
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <Input
          labelText="Second name"
          id="second-name"
          placeholder="Enter second name..."
          onChange={(e) => setSecondName(e.target.value)}
          value={secondName}
        />
        <Button
          text="Register participant"
          className="main-button"
          onClick={(e) => {
            e.preventDefault();
            if (firstName && secondName) {
              dispatch(showTimer(competitionId));
            }
          }}
        />
      </form>
      <Timer
        firstName={firstName}
        secondName={secondName}
        clearInputs={clearInputs}
        isTimer={isTimer}
        competitionId={competitionId}
      />
    </>
  );
};

export default RegistrationForm;
