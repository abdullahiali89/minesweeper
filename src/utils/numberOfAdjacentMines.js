export function numberOfAdjacentMines(board) {
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

  let newBoard = board.map((row, rowIndex) => {
    return row.map((tile, columnIndex) => {
      if (tile.value === "mine") {
        return tile;
      }

      let totalAdjacentMines = 0;
      soroundingtiles.forEach((soroundingtile) => {
        let newRowIndex = rowIndex + soroundingtile[0];
        let newColumnIndex = columnIndex + soroundingtile[1];
        if (
          newRowIndex >= 0 &&
          newRowIndex < board.length &&
          newColumnIndex >= 0 &&
          newColumnIndex < board[0].length
        ) {
          if (board[newRowIndex][newColumnIndex].isMine) {
            totalAdjacentMines++;
          }
        }
      });

      return {
        ...tile,
        adjacentMine: totalAdjacentMines,
      };
    });
  });

  return newBoard;
}
