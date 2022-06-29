export function showEmptyAdjacentTile(
  clickedTile,
  board,
  previousClearedTiles
) {
  let rowIndex = clickedTile[0];
  let columnIndex = clickedTile[1];
  let newBoard = [...markTileCleared(board, rowIndex, columnIndex)];

  let clearedEmptyTiles = [];

  if (previousClearedTiles) {
    clearedEmptyTiles = [...previousClearedTiles];
  }
  let soroundingtiles = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
  ];

  for (let i = 0; i < soroundingtiles.length; i++) {
    let newRowIndex = rowIndex + soroundingtiles[i][0];
    let newColumnIndex = columnIndex + soroundingtiles[i][1];
    if (
      newRowIndex >= 0 &&
      newRowIndex < board.length &&
      newColumnIndex >= 0 &&
      newColumnIndex < board[0].length
    ) {
      if (
        !board[newRowIndex][newColumnIndex].isMine &&
        !board[newRowIndex][newColumnIndex].isVisable &&
        !board[newRowIndex][newColumnIndex].isFlagged
      ) {
        newBoard = [...markTileCleared(newBoard, newRowIndex, newColumnIndex)];
        
        // add clearedTile to clearedEmptyTiles if it is empty
        if (board[newRowIndex][newColumnIndex].adjacentMine === 0) {
          clearedEmptyTiles = [
            ...clearedEmptyTiles,
            [newRowIndex, newColumnIndex],
          ];
        }
      }
    }
  }

  if (clearedEmptyTiles.length > 0) {
    return { newBoard, clearedEmptyTiles };
  }
  return newBoard;
}

function markTileCleared(board, row, column) {
  let newBoard = [...board];
  newBoard[row][column].isVisable = true;
  return newBoard;
}
