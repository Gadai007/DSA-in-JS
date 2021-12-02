const longestConsecutiveSequence = (nums = []) => {
    if(nums.length == 0) return 0

    let map = new Map()
    for(let num of nums){
        map.set(num, 1)
    }

    for(let i in nums){
        if(map.has(nums[i]-1)){
            map.set(nums[i], 0)
        }
    }

    let maxCount = 1
    for(let num of nums){
        if(map.get(num) == 1){
            let seqCount  = 1
            while(map.has(num + seqCount)){
                seqCount++
            }
            maxCount = Math.max(maxCount, seqCount)
        }
    }
    return maxCount
}

//https://leetcode.com/problems/longest-consecutive-sequence/discuss/1127908/2-Approaches-for-your-interview(hindi)