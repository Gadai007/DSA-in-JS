const findDuplicates = (nums = []) => {
    let set = new Set()
    let arr = []
    for(let i = 0; i < nums.length;i++){
        if(!set.has(nums[i])){
            set.add(nums[i])
        }else{
            arr.push(nums[i])
        }
    }
    return arr
}

console.log(findDuplicates([1]))