//https://www.youtube.com/watch?v=pFk4wX9yANw&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=21

const spiralMatrix = (matrix =[[]]) => {
    let left = 0
    let top = 0
    let bottom = matrix.length-1
    let right = matrix[0].length -1
    let result = []
    let size = matrix.length * matrix[0].length

    while(result.length < size){
        for(let i = left; i <= right && result.length < size; i++ ){
            result.push(matrix[top][i])
        }
        top++
        for(let i = top; i <= bottom && result.length < size ; i++){
            result.push(matrix[i][right])
        }
        right--
        for(let i = right; i >= left && result.length < size ; i-- ){
            result.push(matrix[bottom][i])
        }
        bottom--
        for(let i = bottom;i >= top && result.length < size; i--){
            result.push(matrix[i][left])
        }
        left++
    }

    return result
}