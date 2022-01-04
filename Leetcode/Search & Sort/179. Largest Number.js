const largestNumber = (nums = []) => {
    let result = nums
      .map((num) => String(num))
      .sort((a, b) => {
        let n1 = a + b;
        let n2 = b + a;
        if (n1 > n2) {
          return 1;
        } else if (n1 < n2) {
          return -1;
        } else {
          return 0;
        }
      })
      .reverse()
      .join("");
  
      if(result.charAt(0) === '0'){
        return '0'
      }else{
        return result
      }
  };
  
  console.log(largestNumber([3, 30, 34, 5, 9]));

  
  //https://www.youtube.com/watch?v=VV_KPrG_PzE