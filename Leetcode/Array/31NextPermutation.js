const nextPermuataion = (nums = [ ]) => {
    let peak
    for(let i =nums.length ; i >= 0; i--){
        if(i === 0) peak = 0
        if(nums[i] > nums[i-1]){
            peak  = i
            break
        }
    }

    for(let j =nums.length - 1; j >= 0; j--){
        if(nums[peak-1] < nums[j]){
            let temp = nums[j]
            nums[j] = nums[peak-1]
            nums[peak-1] = temp
            break
        }
    }

    let start = peak
    let end = nums.length - 1
    while(start < end){
       let temp = nums[start]
       nums[start] = nums[end]
       nums[end] = temp 
    }
    return nums
}

console.log(nextPermuataion([1,2,3]))

//https://www.youtube.com/watch?v=VVPUAUVbjfM explained