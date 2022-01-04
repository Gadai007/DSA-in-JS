const productExpectSelf = (nums = []) => {
    let right = 1
    let outputArray = []
    outputArray[0] = 1

    for(let i = 1; i < nums.length ; i++){
        outputArray[i] = nums[i-1] * outputArray[i-1]
    }

    for(let i = nums.length-1; i >= 0; i--){
        outputArray[i] = outputArray[i] * right
        right = right * nums[i]
    }

    return outputArray
}

console.log(productExpectSelf([1,2,3,4]))

//https://www.youtube.com/watch?v=tSRFtR3pv74