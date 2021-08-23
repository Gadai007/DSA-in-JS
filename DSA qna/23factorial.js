/**Factorial program in javascript */

const bruteForce = (num) => {
  let product = 1;

  while (num > 0) {
    product = product * num;
    num--;
  }
  return product;
};

console.log(bruteForce(5))

const recursive = (num) => {
    if(num < 2) return num

    return num * recursive(num - 1)
}

console.log(recursive(5))