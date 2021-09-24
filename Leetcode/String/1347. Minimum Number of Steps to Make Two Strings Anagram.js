const firstWord = (s= '', t = '') => {
    let count = new Array(26).fill(0)

    for(let i = 0; i < s.length; i++){
        count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
        count[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--
    }

    let output = 0
    for(let i =0; i < 26; i++){
        if(count[i] > 0) output += count[i]
    }
    return output
}


firstWord("leetcode", "practice")
