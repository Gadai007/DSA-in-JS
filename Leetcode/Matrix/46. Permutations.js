const permute = (nums = []) => {
  const result = [];

  const dfs = (i, nums = []) => {
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }

    for (let j = i; j < nums.length; j++) {
      swap(i, j, nums);
      dfs(i + 1, nums);
      swap(i, j, nums);
    }
  };

  const swap = (i, j, nums) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };
  dfs(0, nums);
  return result;
};

console.log(permute([1, 2, 3]));

//https://www.youtube.com/watch?v=4FdPoW4Qzb4
