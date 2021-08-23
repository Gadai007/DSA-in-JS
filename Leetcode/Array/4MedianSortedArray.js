const bf = (nums1, nums2) => {
  const result = [...nums1, ...nums2].sort((a, b) => a - b);

  const mp = Math.floor(result.length / 2);

  return result.length % 2 !== 0
    ? result[mp]
    : (result[mp] + result[mp - 1]) / 2;
};

// console.log(bf([1, 3], [2, 4]));

const betterSolution = (nums1 = [], nums2 = []) => {
  if (nums1.length + nums2.length < 0) {
    return null;
  }

  let i = 0;
  let j = 0;
  const merge = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[i]) {
      merge.push(nums1[i++]);
    } else {
      merge.push(nums2[j++]);
    }
  }

  while (i < nums1.length) {
    merge.push(nums1[i++]);
  }
  while (j < nums2.length) {
    merge.push(nums2[j++]);
  }

  console.log(merge.length)
  const isOdd = merge.length % 2;
  if (isOdd) {
    return merge[(merge.length - 1) / 2];
  } else {
    return (merge[merge.length / 2] + merge[merge.length / 2 - 1]) / 2;
  }
};

console.log(betterSolution([0, 0, 0, 0, 0], [-1, 0, 0, 0, 0, 0, 1]));
