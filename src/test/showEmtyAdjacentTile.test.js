import { showEmptyAdjacentTile } from "../utils/showEmtyAdjacentTile";

test("showEmptyAdjacentTile if top Left clicked on a 9X9 gid", () => {
  let board = [
    [
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
    ],
    [
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
    ],
    [
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
    ],
  ];
  let clickedTile = [0, 0];
  let expectBoard = [
    [
      {
        isMine: false,
        isVisable: true,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: true,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
    ],
    [
      {
        isMine: false,
        isVisable: true,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: true,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
    ],
    [
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
    ],
  ];

  expect(showEmptyAdjacentTile(clickedTile, board)).toEqual({
    newBoard: expectBoard,
    clearedEmptyTiles: [
      [0, 1],
      [1, 1],
      [1, 0],
    ],
  });
});
test("showEmptyAdjacentTile if center tile is clicked on a 9X9 gid", () => {
  let board = [
    [
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
    ],
    [
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
    ],
    [
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
    ],
  ];
  let clickedTile = [1, 1];
  let expectBoard = [
    [
      {
        isMine: false,
        isVisable: true,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: true,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: true,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
    ],
    [
      {
        isMine: false,
        isVisable: true,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: true,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: true,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
    ],
    [
      {
        isMine: false,
        isVisable: true,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: true,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: true,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
    ],
  ];

  expect(showEmptyAdjacentTile(clickedTile, board)).toEqual({
    newBoard: expectBoard,
    clearedEmptyTiles: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2],
      [2, 2],
      [2, 1],
      [2, 0],
      [1, 0],
    ],
  });
});
