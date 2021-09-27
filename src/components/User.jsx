import React from "react";
import "../styles/User.css";

const User = ({ user, users, ...props }) => {
  return (
    <div
      className="User"
      data-id={user._id}
      onClick={(event) => {
        let currentUser = users.filter(
          (user) => user["_id"] === event.currentTarget.getAttribute("data-id")
        );
        let mainUser = currentUser[0];
        document.querySelector(props[0]).classList.add(props[2]);
        let modalContainer = document.querySelector(props[1]);
        console.log(mainUser);
        for (let key in mainUser) {
          let singleParam = document.createElement("div");
          if (typeof mainUser[key] === "object") {
            for (let secondKey in mainUser[key]) {
              singleParam.innerHTML = `${mainUser[key][secondKey]}`;
            }
          }
          singleParam.innerHTML = ` ${key.toUpperCase()} : ${mainUser[key]}`;
          modalContainer.append(singleParam);
        }
      }}
    >
      <div className="User__img">
        <img src={user.picture} alt="user" />
      </div>
      <div className="User__box">
        <h1>Name: {user.name}</h1>
        <div className="User__field">Gender: {user.gender}</div>
        <div className="User__field">Age: {user.age}</div>
        <div className="User__field">Balance: {user.balance}</div>
      </div>
    </div>
  );
};

export default User;
