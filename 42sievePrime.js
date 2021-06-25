/**Program to print all the prime numbers from 1 to 100. */

const primeNumber = (n) => {
    let isPrime = new Array(n+1).fill(false)
    isPrime[0] = true
    isPrime[1] = true

    for(let i = 2; i < isPrime.length; i++){
        if(!isPrime[i]){
            for(let j = i*i; j <isPrime.length; j+=i){
                isPrime[j] = true
            }
        }
    }

    let newArray = []
    for(let i = 2; i < isPrime.length; i++){
        if(!isPrime[i]){
            newArray.push(i)
        }
    }
   console.log(newArray)
}

primeNumber(100)