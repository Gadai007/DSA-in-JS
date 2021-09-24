const findMaxOnes = (nums = []) => {
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count2 = 0;
    } else {
      count2++;
    }
    if (count2 > count1) {
      count1 = count2;
    }
  }
  return count1;
};

console.log(findMaxOnes([1, 0, 1, 1, 0, 1]));
