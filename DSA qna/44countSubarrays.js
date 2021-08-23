/**Number of subarrays with given sum k */

const naiveApproach = (arr, num) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum === num) {
        count++;
      }
    }
  }
  console.log(count);
};

naiveApproach([3, 4, -7, 1, 3, 3, 1, -4], 7);

