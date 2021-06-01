const biggestSquare = (ar) => {
  ar.sort((a, b) => b - a);
  for(let i = 0; i < ar.length; i++){
      if(ar[i] > 0 && Math.sqrt(ar[i])%1 === 0){
          return ar[i]
      }
  }
  return -1;
};

console.log(biggestSquare([17, 4, 25, 2, 3, 10]))
