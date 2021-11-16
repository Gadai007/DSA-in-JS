function addDigits(num = 0){
    while( num >= 10){
        num = num.toString().split('').reduce((acc, curr) => +acc + +curr, 0)
    }
    return num
}

console.log(addDigits(38))