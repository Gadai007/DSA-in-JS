const findMin = (nums = []) => {
    let start = 0
    let end = nums.length -1

    if(nums[start] <= nums[end]){
        return nums[0]
    }
    while(start <= end){
        let mid = Math.floor((start + end)/2)
        if(nums[mid] > nums[mid+1]){
            return nums[mid+1]
        }else if(nums[mid] < nums[mid-1]){
            return nums[mid]
        }else if(nums[start] < nums[mid]){
            start = mid + 1
        }else if( nums[end] > nums[mid]){
            end = mid-1
        }
    }
    return -1
}

console.log(findMin([4,5,6,7,0,1,2]))