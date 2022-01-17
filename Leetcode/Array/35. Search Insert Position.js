const searchInsertPosition = (nums = [], target) => {
    let start = 0
    let end = nums.length-1
    let mid = Math.floor((start+end)/2)
    while(start <= end){
        let mid = Math.floor((start+end)/2)
        if(target == nums[mid]){
            return mid
        }else if(target < nums[mid]){
            end = mid-1
        }else{
            start = mid + 1
        }
        mid = Math.floor((start+end)/2)
    }
    if(target > nums[nums.length-1]){
        return nums.length
    }else if( target < nums[0]){
        return 0
    }else if(target > nums[mid]){
        return mid + 1
    }else if( target < nums[mid]){
        return mid -1
    }
}

console.log(searchInsertPosition([1,3,5,6], 2))