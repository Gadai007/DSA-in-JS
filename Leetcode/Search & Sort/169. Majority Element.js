const majorityElement = (arr= []) => {
    let result = { }
  
    for(let i = 0; i < arr.length; i++){
      result[arr[i]] = result[arr[i]] ? result[arr[i]] + 1: 1
    }
  
    let output;
    for(let [key, value] of Object.entries(result)){
      if(value >= (arr.length/2)){
        output = key
      }
    }
    return output
  }
  
  majorityElement([2,2,1,1,1,2,2])
  