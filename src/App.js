import React, { useState, useEffect } from "react";
import Timer from "./components/Timer/Timer.jsx";
import Button from "./components/UI/Button/Button.jsx";
import TimingList from "./components/TimingList/TimingList.jsx";
import "./styles/App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(false);
  const [tracker, setTracker] = useState([]);
  const [audio] = useState(new Audio("sound.mp3"));

  useEffect(() => {
    let countingTime = null;

    if (start) {
      countingTime = setInterval(() => {
        setCounter(counter + 1);
      }, 10);
    }

    if (!start) {
      clearInterval(countingTime);
    }

    return () => {
      clearInterval(countingTime);
    };
  }, []);

  function playAudio() {
    audio.play();
  }

  function parseTime(time) {
    return (
      ("0" + Math.floor((time / 60000) % 60)).slice(-2) +
      ":" +
      ("0" + Math.floor((time / 6000) % 60)).slice(-2) +
      ":" +
      ("0" + Math.floor((time / 100) % 60)).slice(-2) +
      ":" +
      ("0" + time).slice(-2)
    );
  }

  function saveLocal(time) {
    localStorage.setItem("timePoints", JSON.stringify(time));
  }

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <Timer time={counter} countingTime={parseTime} />
      <div className="buttons">
        <Button
          className={(!start && counter === 0) || start ? "start" : "continue"}
          text={(!start && counter === 0) || start ? "Start" : "Continue"}
          onClick={() => {
            playAudio();
            setStart(true);
          }}
        />
        <Button
          className="stop"
          text="Stop"
          onClick={() => {
            playAudio();
            setStart(false);
            setTracker(tracker.concat(parseTime(counter)));
          }}
        />
        <Button
          className="reset"
          text="Reset"
          onClick={() => {
            playAudio();
            setCounter(0);
            setTracker(tracker.concat(parseTime(counter)));
            saveLocal(tracker);
          }}
        />
      </div>
      <TimingList trackList={tracker} />
    </div>
  );
}

export default App;
