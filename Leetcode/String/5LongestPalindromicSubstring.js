const longestPalindromicSubstring = (s = '') => {
    if(s.length < 1 || s == null) return ''

    let longest = ''
    for(let i = 0; i < s.length; i++){
        let oddPalindrome = expandFromMiddle(s, i, i)
        let evenPalindrome = expandFromMiddle(s, i-1, i)
        if(evenPalindrome.length > longest.length){
            longest = evenPalindrome
        }
        if(oddPalindrome.length > longest.length){
            longest = oddPalindrome
        }
    }
    return longest
}

const expandFromMiddle = (str = '', left, right) => {
    let i = 0
    while(str[left - i] && str[left-i]==str[right+i]){
        i++
    }
    i--
    return str.slice(left-i, right+i+1)
}

console.log(longestPalindromicSubstring("babad"))