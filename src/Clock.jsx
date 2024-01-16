import React, { useState, useEffect } from "react";

function Clock({ city, timeZone }) {

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); 

  return (
    <div className="clockContainer">
      <h1 className="currentTime">{currentTime}</h1>
      <h2 className="timeInfo">
        Current Time in {city} ({timeZone})
      </h2>
    </div>
  );
}

export default Clock;
