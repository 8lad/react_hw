import React from "react";
import "./Timer.css";
const Timer = (props) => {
  let { time, countingTime } = props;
  return <div className="Timer">{countingTime(time)}</div>;
};

export default Timer;
