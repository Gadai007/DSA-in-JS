/**Caesar Cipher in javascript */

const isUpperCase = (str) => {
  return str === str.toUpperCase();
};

const cipherText = (str, key) => {
  let decipher = "";
  for (let i = 0; i < str.length; i++) {
    if (isUpperCase(str[i])) {
      decipher += String.fromCharCode(
        ((str[i].charCodeAt(0) + key - 65) % 26) + 65
      );
    } else {
      decipher += String.fromCharCode(
        ((str[i].charCodeAt(0) + key - 97) % 26) + 97
      );
    }
  }
  return decipher;
};

console.log(cipherText('AbCd', 13))
