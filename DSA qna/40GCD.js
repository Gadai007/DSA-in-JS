/**Program to find the GCD of two numbers in javascript. */

const GCD = (num1, num2) => {
    while( num1 != num2){
        if(num1 > num2){
            num1 = num1 - num2
        }else{
            num2 = num2 - num1
        }
    }
    return num2
}

console.log(GCD(4, 6))