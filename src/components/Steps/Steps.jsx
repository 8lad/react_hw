import React from "react";
import "./Steps.scss";
import { useGameStore } from "../../context";
import { deleteFromHistory } from "../../actions";

const Steps = () => {
  const [{ history }, dispatch] = useGameStore();
  const steps = [...history];

  const handleReturn = (index) => {
    dispatch(deleteFromHistory(index));
  };

  return (
    <div className="steps">
      <h2>Step history:</h2>
      <ul>
        {steps.map((item, i) =>
          i === 0 ? null : (
            <li key={i} onClick={() => handleReturn(i)}>
              Step: {i}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Steps;
