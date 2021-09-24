const countCharacters = (words=[], chars='') => {
    chars = chars.split('').sort().join('')
    let result = 0
    for(let word of words){
        if(isSubsequence(word, chars)){
            result += word.length
        }
    }
    return result
}

const isSubsequence = (word = '', chars = '') => {
    word = word.split('').sort().join('')
    let j = 0
    for(let i =0; i < chars.length; i++){
        if(word[j] === chars[i]){
            j++
        }
        if(j===word.length){
            return true
        }
    }
    return false
}

console.log(countCharacters(["cat","bt","hat","tree"], 'atach'))