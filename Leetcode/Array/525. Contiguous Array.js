const findMaxLength = (nums = []) => {
    let ans = 0
    let map = new Map()
    let sum = 0
    map.set(0, -1)

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            sum+= -1
        }else if(nums[i] === 1){
            sum += 1
        }

        if(map.has(sum)){
            let idx = map.get(sum)
            let len = i - idx
            if(len > ans){
                ans = len
            }
        }else{
            map.set(sum, i)
        }
    }

    return ans
}

console.log(findMaxLength([0,1,0]))