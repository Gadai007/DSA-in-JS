/**Program to print the chess board pattern in javascript */

function chessboard(row, col){
    let flag = true
    let i =0
    let str = ''
    while (i < row){
        let j = 0
        while(j < col){
            if(flag){
                str += '0 '
            }else{
                str += 'X '
            }
            j++;
            flag = !flag
        }
        console.log(str)
        str=''
        console.log()
        i++
    }
}

chessboard(3,5)

