import React from "react";
import styles from "./gameLevelButtons.module.css";

function GameLevelButtons({ numberOfMines, handleLevelChange }) {
  return (
    <div className={styles.section}>
      <button
        className={
          numberOfMines === 10
            ? `${styles.currentLevel} ${styles.beginner}`
            : styles.beginner
        }
        onClick={(e) => {
          handleLevelChange(e);
        }}
        id="beginner"
      >
        Beginner
      </button>
      <button
        className={
          numberOfMines === 40
            ? `${styles.currentLevel} ${styles.intermediate}`
            : styles.intermediate
        }
        onClick={(e) => {
          handleLevelChange(e);
        }}
        id="intermediate"
      >
        Intermediate
      </button>
      <button
        className={
          numberOfMines === 99
            ? `${styles.currentLevel} ${styles.expert}`
            : styles.expert
        }
        onClick={(e) => {
          handleLevelChange(e);
        }}
        id="expert"
      >
        Expert
      </button>
    </div>
  );
}

export default GameLevelButtons;
