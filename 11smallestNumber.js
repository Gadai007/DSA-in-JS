/* Form the smallest possible number from the given number */

const stringApproach = (num) => {
  let sorted = num.split("").sort();

  if (sorted[0] != "0") {
    return sorted.join("");
  }

  let index = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] > "0") {
      index = i;
      break;
    }
  }

  let temp = sorted[0];
  sorted[0] = sorted[index];
  sorted[index] = temp;

  return sorted.join("");
};

// console.log(stringApproach("55010"));

const numberApproach = (num) => {
  let freq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  while (num > 0) {
    let temp = parseInt(num % 10);
    freq[temp]++;
    num = parseInt(num / 10);
  }

  let result = 0;
  for (let i = 1; i <= 9; i++) {
    if (freq[i] != 0) {
      result = i;
      freq[i]--;
      break;
    }
  }

  for (let i = 0; i <= 9; i++) {
    while (freq[i] != 0) {
      result = result * 10 + i;
      freq[i]--;
    }
  }
  return result;
};

console.log(numberApproach(55010))


