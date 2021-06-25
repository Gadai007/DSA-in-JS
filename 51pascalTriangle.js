/**Program to print the pascal triangle patterns */

const pascalTriangle = (n) => {
    let row = 1
    let str = ''
    let num;
    while( row <= n){
        let space = 1
        while( space <= n - row){
            str += ' '
            space += 1
        }
        let col = 1
        while(col <= row){
            num = nCr(row-1, col-1)
            str += `${num} `
            col += 1
        }
        console.log(str)
        str = ''
        row += 1
    }
}

const factorial = (n) => {
    let res = 1
    while( n > 0){
        res = res * n
        n--
    }
    return res
}

const nCr = (n, r) => {
    return factorial(n)/(factorial(r) * factorial(n-r))
}

pascalTriangle(5)