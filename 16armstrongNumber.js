/**Check if given number is armstrong in javascript */

const armstrong = (n) => {
    let sum = 0
    let result = n
    while( n > 0){
        let temp = parseInt(n % 10)
        sum = sum + (temp * temp * temp)
        n = parseInt(n/10)
    }
    if(result == sum){
        return true
    }else{
        return false
    }
}

console.log(armstrong(153))