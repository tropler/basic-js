const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(directMachine = true) {
    this.directMachine = directMachine;
  }

  encrypt(message, key) {
    if (arguments.length < 2) {
      throw new Error();
    }

    let encryptArray = [];
    let index = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt(0) > 64 &&  message[i].charCodeAt(0) < 91) {
        let newSymbol = String.fromCharCode(( message[i].charCodeAt(0) + key.charCodeAt(index)) % 26
            + "A".charCodeAt(0));

        encryptArray.push(newSymbol);

        if (index !== key.length - 1) {
          index++;
        } else {
          index = 0;
        }

      } else {
        encryptArray.push(message[i]);
      }
    }

    return this.directMachine ? encryptArray.join("") : encryptArray.reverse().join("");
  }

  decrypt(message, key) {
    if (arguments.length < 2) {
      throw new Error();
    }

    let decryptArray = [];
    let index = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();


    for(let i = 0; i < message.length; i++) {
      if(message[i].charCodeAt(0) > 64 && message[i].charCodeAt(0) < 91) {
        let newSymbol = String.fromCharCode((message[i].charCodeAt(0) + 26 - key.charCodeAt(index)) % 26
            + "A".charCodeAt(0));

        decryptArray.push(newSymbol);

        if(index !== key.length - 1) {
          index++;
        } else {
          index = 0;
        }

      } else {
        decryptArray.push(message[i]);
      }
    }

    return this.directMachine ? decryptArray.join("") : decryptArray.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
