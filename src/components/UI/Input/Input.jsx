import React from "react";
import "./Input.scss";
const Input = ({ labelText, id, placeholder, onChange, value }) => {
  return (
    <>
      <label className="regular-label" htmlFor={id}>
        {labelText}
      </label>
      <input
        onChange={onChange}
        className="regular-input"
        type="text"
        name={id}
        id={id}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
