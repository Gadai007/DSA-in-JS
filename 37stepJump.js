/**Find distinct ways to climb the stairs in javascript. */

const step = (n, count = 0) => {
    if(count > n){
        return 0
    }
    if(count  === n){
        return 1
    }
    return step(n, count + 1) + step(n, count + 2)
}

console.log(step(3))