const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr))
    throw new Error('\'arr\' parameter must be an instance of the Array!');

  if (!arr.includes('--discard-next')
    && !arr.includes('--discard-prev')
    && !arr.includes('--double-next')
    && !arr.includes('--double-prev')) {
    return arr;
  }

  const arrCopy = arr.slice();

  for (let i = 0; i < arrCopy.length; i++) {
    const current = arrCopy[i];

    if (typeof (current) === 'string') {
      arrCopy[i] = 'del';

      switch (current) {
        case '--discard-next':
          arrCopy[i + 1] = 'del';
          i++;
          break;

        case '--discard-prev':
          if (i - 1 >= 0) {
            arrCopy[i - 1] = 'del';
          }
          break;

        case '--double-next':
          if (i + 1 < arrCopy.length) {
            arrCopy[i] = arrCopy[i + 1];
          }
          break;

        case '--double-prev':
          if (i - 1 >= 0) {
            arrCopy[i] = arrCopy[i - 1];
          }
          break;

        default:
          arrCopy[i] = current;
          break;
      }
    }
  }

  return arrCopy.filter(item => item != 'del');

}

module.exports = {
  transform
};
