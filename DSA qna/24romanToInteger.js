/**Convert Roman numeral to an integer */

const romanToInteger = (roman) => {
  let arr = ["I", "V", "X", "L", "C", "D", "M"];

  let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let prevIndex = 0;

  let sum = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    if (arr.indexOf(roman[i]) >= prevIndex) {
      sum += values[roman[i]];
    } else {
      sum -= values[roman[i]];
    }
    prevIndex = arr.indexOf(roman[i]);
  }
  console.log(sum);
};

romanToInteger("IV");
