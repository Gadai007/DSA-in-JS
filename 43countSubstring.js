/**Count all substrings having character k */

const naiveApproach = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length + 1; j++) {
      let temp = str.slice(i, j);
      if (temp.includes(char)) {
        count++;
      }
    }
  }
  console.log(count);
};

naiveApproach("abcabc", "c");

const cnt = (str) => {
  let n = str.length;
  return (n * (n + 1)) / 2;
};

const optimizeApproach = (str, char) => {
  let total = cnt(str);
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != char) {
      temp += str[i];
    } else {
      let tempTotal = cnt(temp);
      total -= tempTotal;
      temp = "";
    }
  }

  if (temp) {
    let tempTotal = cnt(temp);
    total -= tempTotal;
  }
  console.log(total)
};

optimizeApproach('abb', 'b')
