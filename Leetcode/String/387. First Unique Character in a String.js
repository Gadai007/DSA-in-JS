const repeatChar = (str = '') => {
    let charObj = {}
    for(let i =0; i< str.length; i++){
        if(charObj[str[i]]){
            charObj[str[i]] += 1
        }else{
            charObj[str[i]] = 1
        }
    }
    
    for(let i =0; i< str.length; i++){
        if(charObj[str[i]] == 1){
            return i
        }
    }
    return -1
}

console.log(repeatChar('leetcode'))