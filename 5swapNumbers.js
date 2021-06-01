const arithmeticApproach = (a, b) => {
  console.log(`Number before swapping ${a} and ${b}`);
  b = b - a;
  a = a + b;
  b = a - b;
  console.log(`Number after swapping ${a} and ${b}`);
};

const bitwiseApproach = (a, b) => {
  console.log(`Number before swapping ${a} and ${b}`);
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log(`Number after swapping ${a} and ${b}`);
};
