const longestSubstring = ( s  = '') => {
    let i = 0
    let j  = 0
    let max  = 0
    let set = new Set
    while( j < s.length){
        if(!set.has(s[j])){
            set.add(s[j])
            j++
            max = Math.max(set.size, max)
            
        }else{
            set.delete(s[i])
            i++
        }
    }
    return max
}

console.log(longestSubstring("abcabcbb"))


//https://www.youtube.com/watch?v=3IETreEybaA