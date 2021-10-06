import React from "react";
import "./TimingList.css";
const TimingList = ({ trackList }) => {
  return (
    <ul className="TimingList">
      {trackList.map((item) => {
        return <li key={Math.random() + item}>{item}</li>;
      })}
    </ul>
  );
};

export default TimingList;
