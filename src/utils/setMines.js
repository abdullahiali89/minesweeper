function getMinesPositions(numberOfMines, numberOfRows, numberOfColumns) {
  let coordinatesArr = [];

  for (let i = numberOfMines; i > 0; i--) {
    let randomMinePosition = randomMine(numberOfRows, numberOfColumns);

    if (isInCoordinatesArr(randomMinePosition, coordinatesArr)) {
      i++;
    } else {
      coordinatesArr.push(randomMinePosition);
    }
  }

  return coordinatesArr;
}

function randomMine(numberOfRows, numberOfColumns) {
  let indexOne = Math.floor(Math.random() * numberOfRows);
  let indexTwo = Math.floor(Math.random() * numberOfColumns);
  return [indexOne, indexTwo];
}

function isInCoordinatesArr(randomMinePosition, coordinatesArr) {
  let found = coordinatesArr.find((position) => {
    return (
      position[0] === randomMinePosition[0] &&
      position[1] === randomMinePosition[1]
    );
  });
  if (found === undefined) {
    return false;
  }
  return true;
}

export function setMines(numberOfMines, board) {
  let mines = getMinesPositions(numberOfMines, board.length, board[0].length);
  let newBoardTiles = mines.reduce(
    (board, mineCoordinates) => {
      return [
        ...board.slice(0, mineCoordinates[0]),
        [
          ...board[mineCoordinates[0]].slice(0, mineCoordinates[1]),
          {
            ...board[mineCoordinates[0]][mineCoordinates[1]],
            isMine: true,
          },
          ...board[mineCoordinates[0]].slice(mineCoordinates[1] + 1),
        ],
        ...board.slice(mineCoordinates[0] + 1),
      ];
    },
    [...board]
  );
  return newBoardTiles;
}
