import React from "react";
import "../styles/Modal.css";
const Modal = ({ title, extraClassName }) => {
  return (
    <div
      className="Modal"
      onClick={(event) => {
        event.target.classList.remove(extraClassName);
      }}
    >
      <div className="Modal__wrapper">
        <div
          className="delete"
          onClick={(event) => {
            event.target.parentElement.parentElement.classList.remove(
              extraClassName
            );
          }}
        >
          <div className="delete__line"></div>
          <div className="delete__line"></div>
        </div>
        <h1>{title}</h1>
        <div className="Modal__box"></div>
      </div>
    </div>
  );
};

export default Modal;
