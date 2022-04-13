const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function calcMines(matrix, i, j) {
  let counter = 0;
  const checkMatrix = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (let m = 0; m < 8; m++) {
    const index = checkMatrix[m];
    const row = i + index[0];
    const column = j + index[1];

    if (
      row < 0 ||
      column < 0 ||
      row > matrix.length - 1 ||
      column > matrix[0].length - 1
    )
      continue;

    if (matrix[row][column]) {
      counter++;
    }
  }
  return counter;
}

function minesweeper(matrix) {
  const columns = matrix[0].length;
  const rows = matrix.length;
  const res = Array.from(Array(rows), () => new Array(columns));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const current = matrix[i][j];

      res[i][j] = current ? 1 : calcMines(matrix, i, j);
    }
  }
  return res;
}

module.exports = {
  minesweeper,
};
