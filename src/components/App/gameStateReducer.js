import { setMines } from "../../utils/setMines";
import { numberOfAdjacentMines } from "../../utils/numberOfAdjacentMines";
import { showEmptyAdjacentTile } from "../../utils/showEmtyAdjacentTile";
import { moreTilesToClear } from "../../utils/moreTilesToClear";
import { showAllMines } from "../../utils/showAllMines";
import { checkIfGameHasBeenWon } from "../../utils/checkGameHasBeenWon";
export const ACTIONS = {
  UPDATE_TILE_ISFLAGED: "UPDATE_TILE_ISFLAGED",
  UPDATE_TILE_ISVISABLE: "UPDATE_TILE_ISVISABLE",
  SET_MINES: "SET_MINES",
};

export const levels = {
  beginner: { rows: 9, colmns: 9, mines: 10 },
  intermediate: { rows: 16, colmns: 16, mines: 40 },
  expert: { rows: 16, colmns: 30, mines: 99 },
};

export const initialGameState = {
  level: levels.expert,
  boardTiles: new Array(levels.expert.rows).fill(
    new Array(levels.expert.colmns).fill({
      isMine: false,
      isExploded: false,
      isVisable: false,
      isFlaged: false,
      adjacentMine: 0,
      value: null,
    })
  ),
  mineCount: levels.expert.mines,
  time: 0,
  gameOver: false,
  gameWon: false,
};

export function gameStateReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_LEVEL:
      let newLevelBoardWithNumbers = numberOfAdjacentMines(
        setMines(
          levels[action.payload].mines,
          new Array(levels[action.payload].rows).fill(
            new Array(levels[action.payload].colmns).fill({
              isMine: false,
              isExploded: false,
              isVisable: false,
              isFlaged: false,
              adjacentMine: 0,
              value: null,
            })
          )
        )
      );
      return {
        ...state,
        boardTiles: [...newLevelBoardWithNumbers],
        level: levels[action.payload],
        mineCount: levels[action.payload].mines,
        gameOver: false,
      };
    case ACTIONS.SET_MINES:
      let newBoardTiles = setMines(state.level.mines, state.boardTiles);
      let boardWithNumbers = numberOfAdjacentMines(newBoardTiles);
      return { ...state, boardTiles: [...boardWithNumbers] };

    case ACTIONS.UPDATE_TILE_ISFLAGED:
      let newBoardTilesWithFlags = [...state.boardTiles];
      newBoardTilesWithFlags[action.payload.tile[0]][
        action.payload.tile[1]
      ].isFlaged = action.payload.isFlaged;
      if (action.payload.isFlaged) {
        let minecount = state.mineCount - 1;

        return {
          ...state,
          boardTiles: [...newBoardTilesWithFlags],
          mineCount: minecount,
        };
      } else {
        let minecount = state.mineCount + 1;

        return {
          ...state,
          boardTiles: [...newBoardTilesWithFlags],
          mineCount: minecount,
        };
      }

    case ACTIONS.UPDATE_TILE_ISVISABLE:
      let tileRow = Number(action.payload.tile[0]);
      let tileColmn = Number(action.payload.tile[1]);
      let isVisable = action.payload.isVisable;

      // an empty tile is clicked
      if (
        state.boardTiles[tileRow][tileColmn].adjacentMine === 0 &&
        !state.boardTiles[tileRow][tileColmn].isMine
      ) {
        let newBoard = showEmptyAdjacentTile(
          [tileRow, tileColmn],
          state.boardTiles
        );

        if (newBoard.newBoard) {
          newBoard = moreTilesToClear(
            newBoard.newBoard,
            newBoard.clearedEmptyTiles
          );
        }

        //check if game is won
        let gameWon = checkIfGameHasBeenWon(newBoard);

        return {
          ...state,
          boardTiles: [...newBoard],
          gameWon: gameWon,
        };
      }
      // a mine is clicked
      if (state.boardTiles[tileRow][tileColmn].isMine) {
        let newBoard = showAllMines(state.boardTiles, tileRow, tileColmn);
        return {
          ...state,
          boardTiles: [...newBoard],
          gameOver: true,
        };
      }
      return {
        ...state,
        boardTiles: [
          ...state.boardTiles.slice(0, tileRow),
          [
            ...state.boardTiles[tileRow].slice(0, tileColmn),
            { ...state.boardTiles[tileRow][tileColmn], isVisable: isVisable },
            ...state.boardTiles[tileRow].slice(tileColmn + 1),
          ],
          ...state.boardTiles.slice(tileRow + 1),
        ],
      };
    default:
      return state;
  }
}
