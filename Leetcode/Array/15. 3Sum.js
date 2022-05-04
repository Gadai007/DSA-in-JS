//https://www.youtube.com/watch?v=54VcLqAHrHk

const threeSum = (nums = []) => {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        while (left > 0 && nums[left] === nums[left + 1]) left++;
        while (right > 0 && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
