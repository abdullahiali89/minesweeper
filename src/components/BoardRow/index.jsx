import React from "react";
import Tile from "../Tile";
import styles from "./BoardRow.module.css";

function BoardRow({ tiles, handleClick, rowIndex, handleRightClick }) {
  return (

    <div className={styles.row}>
      {tiles.map((tile, index) => {
        return (
          <Tile
            handleClick={handleClick}
            handleRightClick={handleRightClick}
            key={`${rowIndex}-${index}`}
            id={`${rowIndex}-${index}`}
            tile={tile}
          />
        );
      })}
    </div>
  );
}

export default BoardRow;
