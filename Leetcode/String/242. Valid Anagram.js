const anagram = (s = '', t = '') => {
    return s.split('').sort().join('') === t.split('').sort().join('')
}

const anagram = (s = '', t = '') => {
    const arr = new Array(26).fill(0)
    for(let i = 0; i < s.length; i++){
        arr[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    for(let i = 0; i < t.length; i++){
        arr[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 1){
            return false
        }else if( arr[i] === 1){
            return false
        }else if( arr[i] < 0){
            return false
        }
    }
    return true
}

console.log(hashMap("cat", "rat"))

