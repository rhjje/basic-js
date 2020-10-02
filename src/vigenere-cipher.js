const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type ? 'direct' : 'reverse';
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Not implemented');
    }
    let alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    message = message.toUpperCase();
    key = key.toUpperCase();
    let arrKey = [];
    let result = [];
    let shift = 0;
    for (let i = 0; i < message.length; i++) {
      if (alfabet.includes(message[i])) {
        arrKey.push(alfabet.indexOf(key[(i - shift) % key.length]));
      } else {
        arrKey.push(null);
        shift++;
      }
    }

    for (let i = 0; i < message.length; i++) {
      if (alfabet.includes(message[i])) {
        let temp;
        if (alfabet.indexOf(message[i]) + arrKey[i] > 25) {
          temp = (alfabet.indexOf(message[i]) + arrKey[i]) - 26;
        } else {
          temp = alfabet.indexOf(message[i]) + arrKey[i];
        }
        result.push(alfabet[temp]);
      } else {
        result.push(message[i]);
      }
    }

    return this.type === 'reverse' ? result.reverse().join('') : result.join('');
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Not implemented');
    }

    let alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    message = message.toUpperCase();
    key = key.toUpperCase();
    let arrKey = [];
    let result = [];
    let shift = 0;
    for (let i = 0; i < message.length; i++) {
      if (alfabet.includes(message[i])) {
        arrKey.push(alfabet.indexOf(key[(i - shift) % key.length]));
      } else {
        arrKey.push(null);
        shift++;
      }
    }

    for (let i = 0; i < message.length; i++) {
      if (alfabet.includes(message[i])) {
        let temp;
        if (alfabet.indexOf(message[i]) - arrKey[i] < 0) {
          temp = (alfabet.indexOf(message[i]) - arrKey[i]) + 26;
        } else {
          temp = alfabet.indexOf(message[i]) - arrKey[i];
        }
        result.push(alfabet[temp]);
      } else {
        result.push(message[i]);
      }
    }

    return this.type === 'reverse' ? result.reverse().join('') : result.join('');
  }
}

module.exports = VigenereCipheringMachine;