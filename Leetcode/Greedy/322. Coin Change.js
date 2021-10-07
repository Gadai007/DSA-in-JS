//https://www.youtube.com/watch?v=kHogi2PC7EY


const coinChange = (coins = [], amount) => {
    let table = new Array(amount + 1).fill(Infinity)
    table[0] = 0

    for(let coin of coins){
        for(let i = 0; i < table.length; i++){
            if(coin <= i){
                let idx = i - coin
                let potentialAmount = table[idx] + 1
                table[i] = Math.min(table[i], potentialAmount)
            }
        }
    }

    return table[table.length - 1] === Infinity ? - 1: table[table.length - 1]
}

console.log(coinChange([1,2,5], 11))