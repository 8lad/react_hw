import React from "react";
import "./Select.css";

const Select = ({ defaultValue, options, ...props }) => {
  return (
    <>
      <select {...props}>
        <option value="" disabled>
          {defaultValue}
        </option>
        {options.map((option) => {
          return (
            <option value={option.value} key={option.title}>
              {option.title}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default Select;
