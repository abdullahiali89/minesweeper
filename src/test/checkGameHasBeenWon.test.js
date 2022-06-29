import { checkIfGameHasBeenWon } from "../utils/checkGameHasBeenWon";

test("checkIfGameHasBeenWon on a 9X9 gid: all tiles are empty and none are all visable", () => {
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
  expect(checkIfGameHasBeenWon(board)).toBe(false);
});

test("checkIfGameHasBeenWon on a 9X9 gid: all tiles are empty and are all visable", () => {
  let board = [
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
  expect(checkIfGameHasBeenWon(board)).toBe(true);
});

test("checkIfGameHasBeenWon on a 9X9 gid: with one empty tile flaged", () => {
  let board = [
    [
      {
        isMine: false,
        isVisable: true,
        isFlaged: true,
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
        isMine: true,
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
  expect(checkIfGameHasBeenWon(board)).toBe(false);
});

test("checkIfGameHasBeenWon on a 9X9 gid: with one mine tile visable", () => {
  let board = [
    [
      {
        isMine: true,
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
        isMine: true,
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
  expect(checkIfGameHasBeenWon(board)).toBe(false);
});
