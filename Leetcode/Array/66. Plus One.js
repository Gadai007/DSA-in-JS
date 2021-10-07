const plusOne = (digits = []) => {
    let n = digits.length -1
    while(n >= 0){
        if(digits[n]===9){
            if(n === 0){
                digits[n] = 0
                digits.unshift(1) 
            }else{
                digits[n] = 0
            }
            n--
        }else{
            digits[n]++
            return digits
        }
    }
    return digits
}

console.log(plusOne([1,2,9]))