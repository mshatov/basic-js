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

  constructor(machineTypeFlag) {
    this.reverseMachine = typeof(machineTypeFlag) === 'boolean';
  }

  checkArgs(...args) {
    args = args.filter(item => typeof(item) === 'string');
    if(args.length < 2) throw new Error('Incorrect arguments!');
  }

  reverseRes(res) {
    return res.split('').reverse().join('');
  }
  
  cryptoSolver(str, key, decryptionFlag) {
    
    str = str.toUpperCase();
    key = key.toUpperCase();
    
    let res = '';

    for (let i = 0, j = 0; i < str.length; ++i) {

      if (j >= key.length) j = 0;

      let keyCharCode = decryptionFlag ? (26 - key.charCodeAt(j)) : key.charCodeAt(j);
      let strCharCode = str.charCodeAt(i);

      if (strCharCode < 65 || strCharCode > 90) {
        res += str[i];
        continue;
      } else {
        res += String.fromCharCode((keyCharCode + strCharCode) % 26 + 65);
      }
      j++;
    }
    
    res = this.reverseMachine ? this.reverseRes(res) : res;
    return res;
  }

  encrypt(str, key) {
    this.checkArgs(str, key);
    return this.cryptoSolver(str, key);
  }

  decrypt(str, key) {
    this.checkArgs(str, key);
    return this.cryptoSolver(str, key, true);
  }
}

module.exports = {
  VigenereCipheringMachine
};
