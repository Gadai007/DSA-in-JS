const removeDuplicates = (s = "") => {
    const freqArr = new Array(26).fill(0);
  
    for (let i = 0; i < s.length; i++) {
      freqArr[s[i].charCodeAt() - 97]++;
    }
  
    let stack = [];
    let charAddedStack = new Array(26);
  
    for (let i = 0; i < s.length; i++) {
      freqArr[s[i].charCodeAt() - 97]--;
  
      if (!charAddedStack[s[i].charCodeAt() - 97]) {
        while (
          s[i] < stack[stack.length - 1] &&
          freqArr[stack[stack.length - 1].charCodeAt() - 97]
        ) {
          charAddedStack[stack.pop().charCodeAt() - 97] = false;
        }
        stack.push(s[i]);
        charAddedStack[s[i].charCodeAt() - 97] = true;
      }
    }
    return stack.join("");
  };
  
  console.log(removeDuplicates("cbacdcbc"));
  