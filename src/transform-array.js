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
function transform( arr ) {
  const res = [];
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        break;
      case "--discard-prev":
        if (stack.length > 0 && arr[i - 2] !== "--discard-next") {
          stack.pop();
        }
        break;
      case "--double-next":
        if (i + 1 < arr.length) {
          stack.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (stack.length > 0 && arr[i - 2] !== "--discard-next") {
          stack.push(stack[stack.length - 1]);
        }
        break;
      default:
        stack.push(arr[i]);
    }
  }

  while (stack.length > 0) {
    res.unshift(stack.pop());
  }

  return res;
}

module.exports = {
  transform
};
