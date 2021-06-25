/**Program to find the GCD of two numbers in javascript. */

export const GCD = (num1, num2) => {
    while( num1 != num2){
        if(num1 > num2){
            num1 = num1 - num2
        }else{
            num2 = num2 - num1
        }
    }
    return num2
}

console.log(GCD(60, 36))