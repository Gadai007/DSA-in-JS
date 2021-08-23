/**Find all the armstrong number between two numbers */

const armstrong = (n) => {
  let sum = 0;
  let result = n;
  while (n > 0) {
    let temp = parseInt(n % 10);
    sum = sum + temp * temp * temp;
    n = parseInt(n / 10);
  }

  return sum === result;
};

const armstrongNumberBetween = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (armstrong(i)) {
      console.log(i);
    }
  }
};

armstrongNumberBetween(0, 400);
