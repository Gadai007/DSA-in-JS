/**Algorithm to merge two sorted array */

const mergeArray = (arr1, arr2) => {
  arr1.sort((a, b) => {
    return b - a;
  });
  arr2.sort((a, b) => {
    return b - a;
  });
  let newArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      newArr.push(arr2[j]);
      j++;
    } else {
      newArr.push(arr1[i]);
      i++;
    }
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  console.log(newArr);
};

mergeArray([5, 6, 7, 9, 11], [6, 8, 10, 12, 15]);
