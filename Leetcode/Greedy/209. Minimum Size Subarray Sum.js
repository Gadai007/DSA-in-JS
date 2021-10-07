const minSum = (target, nums = [] ) => {
    let result = Number.MAX_VALUE
    let left = 0
    let curr_sum = 0
    for(let i = 0; i < nums.length; i++){
        curr_sum += nums[i]
        while(curr_sum >= target){
            result = Math.min(result, i + 1 - left)
            curr_sum -= nums[left]
            left++
        }
    }
    return result != Number.MAX_VALUE ? result : 0
}

console.log(minSum(7,[2,3,1,2,4,3]))

//https://www.youtube.com/watch?v=jKF9AcyBZ6E