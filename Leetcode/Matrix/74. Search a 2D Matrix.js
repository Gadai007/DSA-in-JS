const searchMatrix = (matrix = [], target) => {
    let i = matrix.length-1
    let j  =0
    while(i >= 0 && j < matrix[0].length){
        if(matrix[i][j] === target){
            return true
        }else if(matrix[i][j] > target){
            i--
        }else{
            j++
        }
    }
    return false
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 20))