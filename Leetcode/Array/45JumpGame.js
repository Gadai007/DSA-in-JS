var jump = function(nums) {
    let jumps = 0
    let currentReach = 0
    let currentMax = 0
    for(let i = 0; i < nums.length-1; i++){
        if(i + nums[i] > currentMax){
            currentMax = i + nums[i]
        }
        if(i == currentReach){
            jumps++
            currentReach = currentMax
        }
    }
    return jumps
};