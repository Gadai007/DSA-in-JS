const majorityElementII = (nums = []) => {
    let result = {};
    for (let i = 0; i < nums.length; i++) {
      result[nums[i]] = result[nums[i]] ? result[nums[i]] + 1 : 1;
    }
    let output = [];
    for (let [key, value] of Object.entries(result)) {
      if (value > Math.floor(nums.length / 3)) {
        output.push(key);
      }
    }
    return output;
  };
  
  console.log(majorityElementII([1, 1, 1, 3, 3, 2, 2, 2]));


  //Booyer moore voting algo
  
  const betterMajorityElementII = (nums = []) => {
    let num1 = -1;
    let num2 = -1;
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < nums.length; i++) {
      if (num1 === nums[i]) {
        count1++;
      } else if (num2 === nums[i]) {
        count2++;
      } else if (count1 === 0) {
        num1 = nums[i];
        count1 = 1;
      } else if (count2 === 0) {
        num2 = nums[i];
        count2 = 1;
      } else {
        count1--;
        count2--;
      }
    }
  
    let output = [];
    count1 = 0;
    count2 = 0;
    for (let i = 0; i < nums.length; i++) {
      if (num1 === nums[i]) {
        count1++;
      } else if (num2 === nums[i]) {
        count2++;
      }
    }
  
    if (count1 > Math.floor(nums.length / 3)) {
      output.push(num1);
    }
    if (count2 > Math.floor(nums.length / 3)) {
      output.push(num2);
    }
  
    return output;
  };
  
  console.log(betterMajorityElementII([1, 1, 1, 2, 2, 3, 3, 3]));

  //https://www.youtube.com/watch?v=yDbkQd9t2ig
  