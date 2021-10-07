//brute force

const twosums = (nums = [], target ) => {
    let res = []
    for(let i = 0; i < nums.length; i++){
        let sum = nums[i]
        for(let j = i+1; j < nums.length; j++){
            sum += nums[j]
            if(sum === target){
                res[0] = i
                res[1] = j
            }
            sum -= nums[j]
        }
    }
    return res
}

console.log(twosums([3,2,3], 6))

//hashmap approach

const hashMap = (nums = [], target) => {
    let map = new Map()
    for(let  i = 0; i < nums.length; i++){
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i]
        }

        map.set(nums[i], i)
    }
}