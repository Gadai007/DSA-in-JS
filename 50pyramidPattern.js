/**Program to print the diamond pattern */

const pyramidPattern = (n) => {
    let row = 1
    let k = 1
    let str = ''
    while(k <= (2*n-1)){
        let space = 1
        while(space <= n - row){
            str += ' '
            space += 1
        }
        let col = 1
        while( col <= row){
            str += '* '
            col += 1
        }
        if(k < n){
            row += 1
        }else{
            row -= 1
        }
        console.log(str)
        str = ''
        k += 1
    }
}

pyramidPattern(5)