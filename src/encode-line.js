const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let counter = 1;
  let res = '';
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const next = str[i + 1];
    
    if(next != current) {
      res = (counter === 1) ? (res + current) : res + (counter + current);
      counter = 1;
    } else {
      counter++;
    }    
  }
  return res;
}

module.exports = {
  encodeLine
};
