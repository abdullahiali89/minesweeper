export function showAllMines(board, clickedTileRow, clickedTileColumn) {
  let newBoard = board.map((row) => {
    return row.map((tile) => {
      if (tile.isMine) {
        return { ...tile, isVisable: true };
      }
      return { ...tile };
    });
  });
  newBoard[clickedTileRow][clickedTileColumn].isExploded = true;
  return newBoard;
}
