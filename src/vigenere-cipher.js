const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    
    let result = '';
    let j = 0;
    
    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i].toUpperCase();
      
      if (/[A-Z]/.test(messageChar)) {
        const keyChar = key[j % key.length].toUpperCase();
        
        const messageCharCode = messageChar.charCodeAt(0) - 65;
        const keyCharCode = keyChar.charCodeAt(0) - 65;
        const encryptedCharCode = (messageCharCode + keyCharCode) % 26 + 65;
        
        result += String.fromCharCode(encryptedCharCode);
        j++;
      } else {
        result += messageChar;
      }
    }
    
    return this.isDirect ? result : result.split('').reverse().join('');
  }
  
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
