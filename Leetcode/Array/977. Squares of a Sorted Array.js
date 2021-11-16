const squareArray = (nums = [ ]) => {
    nums = nums.map((num) => num*num)

    return nums.sort((a, b) => a - b)
}

console.log(squareArray([-4,-1,0,3,10]))