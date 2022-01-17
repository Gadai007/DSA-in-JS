//brute force gives TLE

const maximumProfit = (prices = []) => {
    let profit  = 0
    for(let  i = 0; i < prices.length; i++){
        let margin = prices[i]
        for(let j = i+1; j < prices.length; j++){
            if((prices[j] - margin) > profit){
                profit = prices[j] - margin
            }
        }
    }
    return profit > 0 ? profit : 0;
}

console.log(maximumProfit([7,1,5,3,6,4]))

//optimal approach

const maxProfit = (prices = []) => {
    let buy = prices[0]
    let profit = 0
    for(let i = 1; i < prices.length; i++){
        if(buy > prices[i]){
            buy = prices[i]
        }else{
            profit = Math.max(profit, prices[i] - buy)
        }
    }
    return profit
}

console.log(maxProfit([7,1,5,3,6,4]))

//https://www.youtube.com/watch?v=9ZMMNyHy3z4