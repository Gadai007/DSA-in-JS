//https://www.youtube.com/watch?v=nMGL2vlyJk0

const singleNonDuplicate = (nums = []) => {
  let start = 0;
  let end = nums.length - 1;

  if (end == 0) {
    return nums[0];
  } else if (nums[0] != nums[1]) {
    return nums[0];
  } else if (nums[end] != nums[end - 1]) {
    return nums[end];
  }

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] != nums[mid + 1] && nums[mid] != nums[mid - 1]) {
      return nums[mid];
    }

    if (
      (mid % 2 == 0 && nums[mid] == nums[mid + 1]) ||
      (mid % 2 == 1 && nums[mid] == nums[mid - 1])
    ) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1
};

console.log(singleNonDuplicate([1,1,2,2,3,4,4,5,5]))
