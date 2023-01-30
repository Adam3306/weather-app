import { useState, useEffect } from "react";

import "./Clock.css";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const refreshClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000 * 60);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <span className="clock">
        {date.toLocaleTimeString([], { hour: "2-digit" })}
      </span>
      <span className="clock">
        {date.toLocaleTimeString([], { minute: "2-digit" })}
      </span>
    </>
  );
};
export default Clock;
