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
function encodeLine( str ) {
  // let result = '';
  // if (str === '') {
  //   return '';
  // }
  // let count = 1;
  // for (let i = 0; i <= str.length; i++) {
  //   for (let j = i + 1; j <= str.length; j++) {
  //     if (str[i] === str[j]) {
  //       count++;
  //     } else {
  //       if (count === 1) {
  //         result += str[i];
  //       } else {
  //         result += count + str[i];
  //       }
  //       i += count;
  //       count = 1;
  //     }
  //   }
  // }
  // return result;
  if (str === '') return '';
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (str[i] === str[i + 1]) {
      count++;
      i++;
    }
    res += count === 1 ? str[i] : count + str[i];
  }
  return res
}

module.exports = {
  encodeLine
};
