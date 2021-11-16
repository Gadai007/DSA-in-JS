const backSpaceChar = (s = "", t = "") => {
    let stack1 = [];
    let stack2 = [];
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "#") {
        stack1.shift();
      } else {
        stack1.unshift(s[i]);
      }
    }
    for (let i = 0; i < t.length; i++) {
      if (t[i] === "#") {
        stack2.shift();
      } else {
        stack2.unshift(t[i]);
      }
    }
  
    return stack1.join("") === stack2.join("");
  };
  
  console.log(backSpaceChar("a##c",  "#a#c"));
  