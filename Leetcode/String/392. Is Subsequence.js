//https://www.youtube.com/watch?v=RIa7SCyKTkQ

const isSubsequence = (s = "", t = "") => {
  if (s.length == 0) return true;
  let sPointer = 0;
  let tPointer = 0;
  while (tPointer < t.length) {
    if (s[sPointer] == t[tPointer]) {
      sPointer++;
      if (sPointer == s.length) return true;
    }
    tPointer++;
  }
  return false;
};

console.log(isSubsequence("acd", "ahbgdc"));
