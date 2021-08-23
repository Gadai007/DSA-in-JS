/**Program to print the floyd triangle */

const floydPattern = (n) => {
    let rows = 1
    let str = ''
    let num = 1
    while(rows <= n){
        let col = 1
        while(col <= rows){
            str += `${num} `
            col++
            num++
        }
        console.log(str)
        str = ''
        rows++
    }
}

floydPattern(5)