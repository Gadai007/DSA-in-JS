/**Find the largest prime factor */

const largestPrimeFactor = (num) => {
  let i = 2;
  while (i * i < num) {
    while (num % i === 0) {
      num = num / i;
    }
    i++
  }
  return num
};

console.log(largestPrimeFactor(600851475143))
