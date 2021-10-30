import { useState, useEffect } from "react";

const useTimer = (counterValue, start) => {
  const [counter, setCounter] = useState(counterValue);

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
  });
  return { counter, setCounter };
};

export default useTimer;
