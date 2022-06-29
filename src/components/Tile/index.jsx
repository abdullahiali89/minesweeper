import styles from "./Tile.module.css";
function Tile({ tile, id, handleClick, handleRightClick }) {
  function tileContent() {
    if (tile.isFlaged) {
      return "🚩";
    }
    if (tile.isVisable) {
      if (tile.isMine) {
        return "💣";
      }
      if (tile.adjacentMine !== 0) {
        return tile.adjacentMine;
      }
      return tile.value;
    }
  }

  function tileClass() {
    if (tile.isVisable) {
      if (tile.isExploded) {
        return `${styles.tile} ${styles.red}`;
      }
      return `${styles.tile} ${styles.white}`;
    }
    if (tile.isFlagged) {
      return `${styles.tile} ${styles.yellow}`;
    }
    return `${styles.tile} ${styles.grey}`;
  }

  return (
    <div
      contextMenu="none"
   
      onContextMenu={(e) => {
        handleRightClick(e);
      }}
      onClick={(e) => {
        handleClick(e);
      }}
      id={id}
      className={tileClass()}
    >
      {tileContent()}
    </div>
  );
}

export default Tile;
