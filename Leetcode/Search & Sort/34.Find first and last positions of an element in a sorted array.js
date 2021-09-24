const firtNLast = (nums = [], target) => {
    let newArr = [-1, -1]
    let start = 0
    let end = nums.length-1
    while(start <= end){
        let mid = Math.floor((start + end)/2)
        if(nums[mid] === target){
            newArr[0] = mid
            end = mid - 1
        }else if(nums[mid] < target){
            start = mid + 1
        }else{
            end = mid -1 
        }
    }
    start = 0
    end = nums.length-1
    while(start <= end){
        let mid = Math.floor((start + end)/2)
        if(nums[mid] === target){
            newArr[1] = mid
            start = mid + 1
        }else if(nums[mid] < target){
            start = mid + 1
        }else{
            end = mid -1 
        }
    }
    return newArr
}

console.log(firtNLast([5,7,7,8,8,10], 8))

