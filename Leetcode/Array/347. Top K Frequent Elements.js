const topKFrequent = (nums = [], k) => {
  let freq = {};

  for (let i = 0; i < nums.length; i++) {
    if (freq[nums[i]]) {
      freq[nums[i]] = freq[nums[i]] + 1;
    } else {
      freq[nums[i]] = 1;
    }
  }
  return Object.keys(freq)
    .sort((a, b) => freq[b] - freq[a])
    .slice(0, k);
};

console.log(topKFrequent([1], 1));
