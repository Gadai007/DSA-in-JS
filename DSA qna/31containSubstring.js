/**Check if string contains a substring in javascript */
const containSubstring = (str, sub) => {
    let arr = str.split(" ")

    for(let i =0; i < arr.length; i++){
        if(arr[i] === sub) return true
    }
    return false
}

console.log(containSubstring('I am Prashant Yadav', 'prashant'))

const shortcut = (str, sub) => {
    return str.includes(sub)
}

console.log(shortcut('I am Prashant Yadav', 'prashant'))