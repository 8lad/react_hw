import React from "react";
import "./Button.scss";

const Button = ({ text, onClick, className, disabled = false }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
