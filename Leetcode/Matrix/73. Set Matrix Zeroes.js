const setZeros = (matrix = [[]]) => {
    let zerosArray = []

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                zerosArray.push([i, j])
            }
        }
    }

    for(let address of zerosArray){
        let i = address[0]
        let j = address[1]
        setZerosMatrix(i, j, matrix)
    }
}

function setZerosMatrix(row, col, matrix = [[]]){
    for(let i = 0; i < matrix.length; i++){
        matrix[i][col] = 0
    }

    for(let i = 0; i < matrix[0].length; i++){
        matrix[row][i] = 0
    }
}