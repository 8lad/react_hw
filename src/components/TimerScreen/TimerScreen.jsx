import React from "react";
import "./TimerScreen.scss";
const TimerScreen = (props) => {
  let { time, countingTime } = props;
  return <div className="Timer-screen">{countingTime(time)}</div>;
};

export default TimerScreen;
