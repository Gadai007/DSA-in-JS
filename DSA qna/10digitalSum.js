const digitalSum = (n) => {
  let sum = 0;
  while (parseInt(n) > 0) {
    let temp = n % 10;
    sum = sum + temp;
    n = parseInt(n / 10);
  }

  if (sum < 10) {
    return sum;
  }

  return digitalSum(sum);
};

console.log(digitalSum(5674));
