/**Find missing alphabets to make a string panagram */

const panagram = (str) => {
    let arr = new Array(26)
    arr.fill(0,0,25)
    str.toLowerCase()

    for(let i = 0; i < str.length; i++){
        if(str[i] >= 'a' && str[i] <= 'z'){
            arr[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] = true
        }
    }

    let missing = ''

    for(let i = 0; i < arr.length ; i++){
        if(!arr[i]){
            missing += String.fromCharCode(97 + i)
        }
    }
    return missing
}

console.log(panagram("Learn just don't study"))