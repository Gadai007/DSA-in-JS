const equilibriumPoint = (nums = []) => {
    let sum = 0
    for (let i =0; i < nums.length; i++){
        sum += nums[i]
    }

    let pivot = 0
    for(let i = 0; i < nums.length; i++){
        

        if(pivot === sum - pivot- nums[i]){
            return i
        }

        pivot += nums[i]
    }

    return -1
}
console.log(equilibriumPoint([1,7,3,6,5,6]))