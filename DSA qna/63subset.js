const subset = (nums) => {
  const result = [];

  const dfs = (i, nums, slate) => {
      //base case
      //if nums get out of bound
    if (i === nums.length) {
      result.push(slate.slice());
      return;
    }
    //exclude
    dfs(i + 1, nums, slate);

    //include
    slate.push(nums[i]);
    dfs(i + 1, nums, slate);
    slate.pop();
  };

  dfs(0, nums, [])
  return result
};

console.log(subset([1,2,3]))
