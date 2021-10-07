//brute force

const bruteForce = ( nums = [] ) => {
    let globalProduct = nums[0]
    for(let i = 0; i < nums.length; i++){
        let localProduct = 1
        for(let j = i; j < nums.length; j++){
            localProduct *= nums[j]

            if(localProduct > globalProduct){
                globalProduct = localProduct
            }
        }
    }
    return globalProduct
}

console.log(bruteForce([-2, 3, -4]))


//dynamic programming

const dynamicProgramming = (nums = []) => {
    let maxTillIndex = [nums[0]]
    let minTillIndex = [nums[0]]
    let max = nums[0]
    for(let i =1; i < nums.length; i++){
        maxTillIndex[i] = Math.max(nums[i], nums[i] * maxTillIndex[i-1], nums[i] * minTillIndex[i-1])
        minTillIndex[i] = Math.min(nums[i], nums[i] * maxTillIndex[i-1], nums[i] * minTillIndex[i-1])

        max = Math.max(max, maxTillIndex[i])
    }
    return max
}

console.log(dynamicProgramming([-2,3,-4]))

//https://www.youtube.com/watch?v=y0nvBP6gZ-0