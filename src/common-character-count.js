const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function makeObject(str) {
  let res = {};
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    res[current] = (current in res) ? (res[current] + 1) : 1;
  }
  return res;
}

function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const o1 = makeObject(s1);
  const o2 = makeObject(s2);
  let counter = 0;
  
  for (key of Object.keys(o1)) {
    if (key in o2) {
      counter += Math.min(o1[key], o2[key]);
    }
  }
  return counter;
}

// console.log(getCommonCharacterCount("aabcc", "adcaa"))

module.exports = {
  getCommonCharacterCount,
};
