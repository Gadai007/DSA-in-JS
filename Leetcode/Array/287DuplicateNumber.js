var findDuplicate = function (nums) {
  let fast = 0;
  let slow = 0;
  while (true) {
    fast = nums[nums[fast]];
    slow = nums[slow];
    if (slow === fast) {
      let pointer = 0;
      while (pointer != slow) {
        pointer = nums[pointer];
        slow = nums[slow];
      }
      return pointer;
    }
  }
};
