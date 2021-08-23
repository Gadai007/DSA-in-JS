/**Check prime number */

const primeNumber = (n) => {
    if( n < 2){
        return console.log('prime')
    }
    let i = 2
    let flag = 0
    while(i < n){
        if( n % i === 0){
            flag = 1
            break
        }
        i++
    }
    if(flag === 0){
       console.log('prime') 
    }else{
        console.log('not prime')
    }
}

primeNumber(37)