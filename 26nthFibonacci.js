const nthFibonacci = (num) => {
    let f = 0
    let s = 1
    let t = 0
    for(let i =2; i <= num; i++){
        t = f + s
        f= s
        s = t
    }
    console.log(s)
}

nthFibonacci(12)