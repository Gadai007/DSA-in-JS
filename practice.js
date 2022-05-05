//s = "codeleet", indices = [4,5,6,7,0,2,1,3]

const diagonalSum = (mat = [[]]) => {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i] + mat[i][mat.length - i - 1];
  }

  if (mat.length !== 0) {
    sum -= mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)];
  }
  return sum;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
