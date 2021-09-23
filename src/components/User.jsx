import React from "react";
import "../styles/User.css";

const User = (props) => {
  return (
    <div className="User">
      <div className="User__img">
        <img src={props.user.picture} alt="user" />
      </div>
      <div className="User__box">
        <h1>Name: {props.user.name}</h1>
        <div className="User__field">Gender: {props.user.gender}</div>
        <div className="User__field">Age: {props.user.age}</div>
        <div className="User__field">Balance: {props.user.balance}</div>
      </div>
    </div>
  );
};

export default User;
