const basicApproach = (nums = []) => {
    let result = []
    let unique = new Set(nums)
    for(let i = 0; i < nums.length; i++){
        if(!unique.has(i+1)){
            result.push(i+1)
        }
    }
    return result
}

const optimalApproach = (nums = []) => {
    nums.forEach(number => {
        let indexVisited = Math.abs(number) - 1
        if(nums[indexVisited] > 0){
            nums[indexVisited] = nums[indexVisited] * -1
        }
    })

    let result = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            result.push(i+1)
        }
    }
    return result
}