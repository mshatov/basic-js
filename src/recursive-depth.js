const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr, counter = 1) {
    this.counter = counter;
    this.arr = arr;

    for (let i = 0; i < this.arr.length; i++) {

      if (Array.isArray(this.arr[i])) {
        this.calculateDepth(this.arr.flat(), ++counter);
      }
    }

    return this.counter;
  }
}

module.exports = {
  DepthCalculator
};
