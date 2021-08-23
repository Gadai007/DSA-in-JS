/**Alternatively merge two different arrays*/

function mergeArray(arr1: number[], arr2: number[]) {
  let flag = false;
  let i = 0;
  let j = 0;
  let newArray: number[] = [];
  while (i < arr1.length && j < arr2.length) {
    if (!flag) {
      newArray.push(arr1[i]);
      i++;
    } else {
      newArray.push(arr2[j]);
      j++;
    }
    flag = !flag;
  }
  while (i < arr1.length) {
    newArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArray.push(arr2[j]);
    j++;
  }
  console.log(newArray)
}

mergeArray([1, 2, 3, 4, 5, 6, 7 , 8],[11, 22, 33, 44])
