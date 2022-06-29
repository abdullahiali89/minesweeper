import { numberOfAdjacentMines } from "../utils/numberOfAdjacentMines";
test("numberOfAdjacentMines on a 9X9 gid", () => {
  let boardWithMines = [
    [
      {
        isMine: true,
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
  let expectedBoard = [
    [
      {
        isMine: true,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 0,
        value: null,
      },
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 1,
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
        adjacentMine: 1,
        value: null,
      },
      {
        isMine: false,
        isVisable: false,
        isFlaged: false,
        adjacentMine: 1,
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
  expect(numberOfAdjacentMines(boardWithMines)).toEqual(expectedBoard);
});
