const threeClosestSum = (nums = [], target) => {
  let result = nums[0] + nums[1] + nums[nums.length - 1];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let aPointer = i + 1;
    let bPointer = nums.length - 1;
    while (aPointer < bPointer) {
      let currentSum = nums[i] + nums[aPointer] + nums[bPointer];
      if (currentSum > target) {
        bPointer -= 1;
      } else {
        aPointer += 1;
      }
      if (currentSum == target) {
        return currentSum;
      }

      if (Math.abs(currentSum - target) < Math.abs(result - target)) {
        result = currentSum;
      }
    }
  }
  return result;
};

console.log(threeClosestSum([1, 2, 4, 8, 16, 32, 64, 128], 82));

//https://www.youtube.com/watch?v=qBr2hq4daWE
