/**Program to print the Collatz sequence in javascript. */

const collatz = (num) => {
    while( num != 1){
        console.log(num)
        if(num % 2 === 0){
            num = parseInt(num /2)
        }else{
            num = num * 3 + 1
        }
    }
    console.log(num)
}

collatz(6)