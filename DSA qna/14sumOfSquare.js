/**Difference between square of sum of numbers and sum of square of numbers. */

const squareAndSum = (n) => {
    let sum = 0
    let squareSum = 0
    for(let i = 0; i <= n; i++){
        sum += i
        squareSum = squareSum + (i*i)
    }
    return ( sum * sum ) - squareSum
}