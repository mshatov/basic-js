const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const columns = matrix[0].length;
  const rows = matrix.length;
  let sum = 0;

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      const current = matrix[j][i];
      if(current) {
        sum += current;
      } else {
        break;
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
