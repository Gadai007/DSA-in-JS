const squareRoot = (n) => {
  let start = 0;
  let end = n;
  let ans = 0
  while(start <= end) {
      let mid = Math.floor((start+end)/2)
      if(mid*mid === n){
          return mid
      }else if(mid*mid > n){
        end = mid -1
      }else{
          ans = mid
          start = mid+ 1
      }
  }
  return ans
};

console.log(squareRoot(16))
