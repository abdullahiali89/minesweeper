import React from "react";
import BoardRow from "../BoardRow";
import styles from "./Board.module.css";

function Board({ handleClick, boardTiles, handleRightClick }) {
  return (
    <div className={styles.board}>
      {boardTiles.map((boardRow, index) => {
        return (
          <BoardRow
            key={index}
            handleClick={handleClick}
            handleRightClick={handleRightClick}
            rowIndex={index}
            tiles={boardRow}
          />
        );
      })}
    </div>
  );
}

export default Board;
