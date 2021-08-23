var sortColors = function(nums) {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
  
    let newArray = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        count0++;
      } else if (nums[i] === 1) {
        count1++;
      } else {
        count2++;
      }
    }
    let i = 0
    while (count0 !== 0) {
      nums[i] = 0
      count0--;
      i++
    }
    while (count1 !== 0) {
      nums[i] = 1
      count1--;
      i++
    }
    while (count2 !== 0) {
      nums[i] = 2
      count2--;
      i++
    }
  };