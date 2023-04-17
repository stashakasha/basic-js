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
  calculateDepth(arr, depth = 1) {
    const nestedArrays = arr.filter(item => Array.isArray(item));
    if (nestedArrays.length === 0) {
      return depth;
    }
    const depths = nestedArrays.map(item => this.calculateDepth(item, depth + 1));
    return Math.max(...depths);
  }
}

module.exports = {
  DepthCalculator
};
