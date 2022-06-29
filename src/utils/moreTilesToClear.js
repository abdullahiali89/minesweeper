import { showEmptyAdjacentTile } from "./showEmtyAdjacentTile";
export function moreTilesToClear(Board, emptyTilesArr) {
  let newBoard = Board;

  let newEmptyTilesArr = emptyTilesArr.reduce(
    function (newEmptyTilesArr, emptyTile) {
      let result = showEmptyAdjacentTile(emptyTile, Board);
      if (result.newBoard) {
        newBoard = result.newBoard;

        // remove emptytile from emptyTileArr
        newEmptyTilesArr.splice(0, 1);

        return [...newEmptyTilesArr, ...result.clearedEmptyTiles];
      }
      newBoard = result;

      // remove emptytile from emptyTileArr
      newEmptyTilesArr.splice(0, 1);

      return [...newEmptyTilesArr];
    },
    [...emptyTilesArr]
  );
  if (newEmptyTilesArr.length > 0) {
    newBoard = moreTilesToClear(newBoard, newEmptyTilesArr);
    return newBoard;
  }
  return newBoard;
}
