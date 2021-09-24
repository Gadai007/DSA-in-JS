const bracketBalancing = (s = '') => {
    let stack = [];
      for (let i = 0; i < s.length; i++) {
          stack.push(s[i]);
          if (stack.length > 1 && stack[stack.length-2] === '[' && stack[stack.length-1] === ']') {
              stack.pop();
              stack.pop();
          }
      }
      
      return Math.ceil(stack.length / 4);
  }
  
  console.log(bracketBalancing(']]][[['))