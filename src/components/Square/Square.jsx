import React from "react";
import "./Square.scss";
import { useGameStore } from "../../context";

export default function Square({ value, onClick }) {
  const classes = ["btn"];
  const [{ winner }] = useGameStore();

  if (value || winner) {
    classes.push("disabled");
  }

  return (
    <button
      className={classes.join(" ")}
      onClick={onClick}
      disabled={value || winner}
    >
      {value}
    </button>
  );
}
