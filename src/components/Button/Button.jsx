import React from "react";
import "./Button.scss";

const Button = ({ text, onClick, disabled = false }) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
