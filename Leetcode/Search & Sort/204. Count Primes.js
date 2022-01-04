const countPrimes = (n) => {
    let primes = new Array(n).fill(true)
    primes[0] = false
    primes[1] = false
    for(let i = 2; i < primes.length; i++){
        if(primes[i]){
            for(let j = i*i; j < primes.length ; j+= i){
                primes[j] = false
            }
        }
    }
    
    let result = 0
    for(let i = 0; i < primes.length; i++){
        if(primes[i]){
            result++
        }
    }
    return result
}

console.log(countPrimes(10))

