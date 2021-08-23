const duplicate = (s = '') => {
    s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    let start = 0
    let end = s.length - 1
    while(start <= end){
      if(s[start] != s[end]){
        return false
      }
      start++
      end--
    }
    return true
  }
  
  console.log(duplicate('A man, a plan, a canal: Panama'))