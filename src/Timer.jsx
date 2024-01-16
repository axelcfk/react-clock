import React, { useState, useEffect } from "react";

function Timer({ startingTime }) {
  const [remainingTime, setRemainingTime] = useState(startingTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId; 

    if (isRunning) {
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalId);
            setIsRunning(false);
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, startingTime]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const minutes = Math.floor(isNaN(remainingTime) ? 0 : remainingTime / 60);
  const seconds = isNaN(remainingTime) ? 0 : remainingTime % 60;

  return (
    <div className="timerDiv">
      <h1>Timer {startingTime} seconds</h1>
      <p>
        Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>
      <button onClick={handleStart} className="button">
        Start
      </button>
      <button onClick={handlePause} className="button">
        Pause
      </button>
    </div>
  );
}

export default Timer;
