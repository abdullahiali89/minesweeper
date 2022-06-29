import { useReducer, useEffect } from "react";
import styles from "./App.module.css";
import Timer from "../Timer";
import {
  initialGameState,
  gameStateReducer,
  ACTIONS,
} from "./gameStateReducer.js";
import Board from "../Board";
import GameLevelButtons from "../gameLevelButtons/index,";
import MineCounter from "../MineCounter";
function App() {
  const [gameState, dispatch] = useReducer(gameStateReducer, initialGameState);

  //useEffect to set gameboard at the start of the game
  useEffect(() => {
    dispatch({ type: ACTIONS.SET_MINES });
  }, []);

  // make flaged when right click
  function handleRightClick(e) {
    e.preventDefault();
    let tile = e.target.id.split("-");

    if (gameState.gameOver) return;

    if (!gameState.boardTiles[tile[0]][tile[1]].isFlaged) {
      dispatch({
        type: ACTIONS.UPDATE_TILE_ISFLAGED,
        payload: { tile, isFlaged: true },
      });

      return;
    }

    if (gameState.boardTiles[tile[0]][tile[1]].isFlaged) {
      dispatch({
        type: ACTIONS.UPDATE_TILE_ISFLAGED,
        payload: { tile, isFlaged: false },
      });
      return;
    }
  }
  // reveal tile when clicked
  function handleClick(e) {
    let tile = e.target.id.split("-");
    if (gameState.gameOver) {
      return;
    }
    if (gameState.boardTiles[tile[0]][tile[1]].isFlaged) {
      return;
    }
    if (gameState.boardTiles[tile[0]][tile[1]].isVisable) {
      return;
    }

    dispatch({
      type: ACTIONS.UPDATE_TILE_ISVISABLE,
      payload: { tile, isVisable: true },
    });
  }

  function handleLevelChange(e) {
    dispatch({ type: ACTIONS.SET_LEVEL, payload: e.target.id });
  }

  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <MineCounter mines={gameState.mineCount} />
        <h1 className={styles.title}>
          {gameState.gameOver
            ? "GAME OVER"
            : gameState.gameWon
            ? "congrats you won"
            : "mineSweeper"}
        </h1>
        <Timer level={gameState.level} gameOver={gameState.gameOver} />
      </div>
      <div className={styles.main}>
        <GameLevelButtons
          numberOfMines={gameState.level.mines}
          handleLevelChange={handleLevelChange}
        />

        <Board
          boardTiles={gameState.boardTiles}
          handleClick={handleClick}
          handleRightClick={handleRightClick}
        />
      </div>
    </div>
  );
}

export default App;
