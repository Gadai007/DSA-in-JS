/**An algorithm to print the matrix in L pattern */
const printMatrixLShape = (arr) => {
  let m = arr.length;
  let n = arr[0].length;
  let row = 0;
  let col = 0;
  while (row < m && col < n) {
    for (let i = row; i < m; i++) {
      console.log(arr[i][col]);
    }
    col++;
    for (let i = col; i < n; i++) {
      console.log(arr[m - 1][i]);
    }
    m--;
  }
};

printMatrixLShape([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]])