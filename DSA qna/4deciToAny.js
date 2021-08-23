const baseConverter = (n, b) => {
    let rem
    let convertedString = ''
    let digit = '0123456789ABCDEF'
    while( n > 0){
        rem = Math.floor(n % b)
        convertedString = digit[rem] + convertedString
        n = Math.floor(n/b)
    }
    console.log(convertedString)
}

baseConverter(1021, 2)