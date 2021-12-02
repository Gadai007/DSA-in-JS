const nextGreaterElemet = (letters = [], target = "") => {
  let start = 0;
  let end = letters.length;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (target < letters[mid]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return letters[start % letters.length];
};

//https://leetcode.com/problems/find-smallest-letter-greater-than-target/discuss/1496476/92-javascript-solution-binary-search-with-comments.-Feedback-welcomed
