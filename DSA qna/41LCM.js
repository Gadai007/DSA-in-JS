/**Find the LCM of two numbers in javascript */

import { GCD } from './40GCD'

const LCM = ( num1, num2) => {
    let gcd = GCD(num1, num2)

    return (num1 * num2)/gcd
}

console.log(LCM(15,20))