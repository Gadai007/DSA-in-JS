const duplicate = (s = '') => {
    const result = { }
    for(let i = 0; i < s.length; i++){
      if(result[s[i]]){
        result[s[i]] = result[s[i]] + 1
      }else{
        result[s[i]] = 1
      }
    }
    const resultArray = Object.keys(result)
    resultArray.map(res => {
      if(result[res] > 1){
        console.log(`${res} contains ${result[res]} values`)
      }
    })
    }
  
  
  duplicate('acbaabcccd')