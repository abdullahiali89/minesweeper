import { useEffect, useState } from "react";
import styles from "./Timer.module.css";
function Timer({ gameOver, level }) {
  const [seconds, setSeconds] = useState(0);
  const [reSetTimer, setReSetTimer] = useState(false);

  //checks if level is changed and resets the timer
  useEffect(() => {
    if (!gameOver) {
      setReSetTimer(true);
    }
  }, [level, gameOver]);

  useEffect(() => {
    let interval = 0;
    if (reSetTimer) {
      setSeconds(0);
    }
    if (!gameOver) {
      setSeconds(0);
      interval = setInterval(() => {
        setSeconds((pretime) => pretime + 1);
      }, 1000);
      setReSetTimer(false);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameOver, reSetTimer]);

  return (
    <div className={styles.timer}>
      <span>{seconds}</span>
    </div>
  );
}

export default Timer;
