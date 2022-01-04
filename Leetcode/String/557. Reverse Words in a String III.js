const stringReverse = (str = "") => {
  const splitArray = str.split(" ");
  for (let i = 0; i < splitArray.length; i++) {
    splitArray[i] = splitArray[i].split("").reverse().join("");
  }
  return splitArray.join(" ");
};

console.log(stringReverse("Let's take LeetCode contest"));
