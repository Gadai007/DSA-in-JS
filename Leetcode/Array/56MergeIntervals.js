const merge = function (nums) {
  nums.sort((a, b) => a[0] - b[0]);

  const result = [nums[0]];
  for (let num of nums) {
    let e1 = result[result.length - 1][1];
    let s2 = num[0];
    let e2 = num[1];
    if (e1 >= s2) {
      result[result.length - 1][1] = Math.max(e1, e2);
    } else {
      result.push(num);
    }
  }
  return result;
};
