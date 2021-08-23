/**Program to print the pyramid pattern */

const pyramidPattern = (n) => {
    let row = 0
    let str = ''
    while( row <= n){
        let col = 0
        while( col <= row){
            str += '* '
            col++
        }
        console.log(str)
        str = ''
        row++
    }
}

pyramidPattern(4)