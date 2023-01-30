import { useState, useEffect } from "react";

import "./Clock.css";

const Clock = ({ timezone }) => {
  const [date, setDate] = useState(new Date());

  const hours = Math.floor(timezone / 3600);
  const minutes = Math.floor((timezone - hours * 3600) / 60);

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
      <span className="clock">{date.getUTCHours() + hours}</span>
      <span className="clock">{date.getUTCMinutes() + minutes}</span>
    </>
  );
};
export default Clock;
