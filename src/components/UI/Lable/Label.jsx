import React from "react";
import "./Label.css";
const Label = ({ labelText, ...props }) => {
  return (
    <>
      <label {...props}>{labelText}</label>
    </>
  );
};

export default Label;
