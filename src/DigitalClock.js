// DigitalClock.js
import React, { useState, useEffect } from 'react';
import './DigitalClock.css'; // CSS file import karein

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timerId); // Cleanup interval on unmount
  }, []);

  return (
    <div className="digital-clock">
      {time.toLocaleTimeString()}
    </div>
  );
};

export default DigitalClock;
