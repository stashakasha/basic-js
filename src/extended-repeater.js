const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  str = String(str);
  let arr = [];
  let addArr = [];

  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  if(addition !== undefined) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      addArr.push('' + addition);
    }
  }

  const additString = addArr.join(additionSeparator);

  for (let i = 0; i < repeatTimes; i++) {
    arr.push(str + additString);
  }

  return arr.join(separator);
}

module.exports = {
  repeater
};
