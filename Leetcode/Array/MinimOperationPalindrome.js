//Minimum no. of operations required to make an array palindrome

const minOpPallindrome = ( nums ) => {
    let start =0
    let end  =nums.length - 1
    let count = 0
    while(start < end){
        if(nums[start] === nums[end]){
            start++
            end--
        }else if(nums[start] < nums[end]){
            nums[start] = nums[start] + nums[start-1]
            start++
            count++
        }else{
            nums[end] =  nums[end] + nums[end+1]
            end--
            count++
        }
    }
    return count
}

console.log(minOpPallindrome([1,4,5,9,1]))