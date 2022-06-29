export function checkIfGameHasBeenWon(board) {
  let gameHasBeenWon = true;
  board.forEach((row) => {
    row.forEach((tile) => {
      if (!tile.isMine && !tile.isVisable) {
        gameHasBeenWon = false;
      }
      if (tile.isMine && tile.isVisable) {
        gameHasBeenWon = false;
      }
      if (!tile.isMine && tile.isVisable && tile.flagged) {
        gameHasBeenWon = false;
      }
    });
  });
  return gameHasBeenWon;
}
