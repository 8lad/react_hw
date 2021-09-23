import React from "react";
import "../styles/Form.css";

const Form = () => {
  return (
    <div className="Form">
      <h2>Add new user</h2>
      <form>
        <label htmlFor="username">Enter user name:</label>
        <input type="text" id="username" />
        <label htmlFor="userage">Enter age:</label>
        <input type="number" id="userage" />
        <label htmlFor="usergender">Enter gender:</label>
        <select id="usergender">
          <option disabled>----</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label htmlFor="userbalance">Enter balance:</label>
        <input type="number" id="userbalance"></input>
        <button id="form-btn"> Create new one </button>
      </form>
    </div>
  );
};

export default Form;
