/**Absolute difference between diagonals of matrix */

const matrixDiff = (arr) => {
    let d1 = 0
    let d2 = 0

    let top = 0
    let bottom = arr.length - 1

    for(let i =0; i < arr[0].length; i++){
        d1 += arr[top++][i]
        d2 += arr[bottom--][i]
    }

    console.log(Math.abs(d1-d2))
}

matrixDiff([
    [1,  2],
    [4,  6],
  ])