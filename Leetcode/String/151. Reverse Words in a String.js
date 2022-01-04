const reverseWords = (s = '') => {
    return s.trim(' ').split(' ').filter(word => word != '').reverse().join(' ')
}

console.log(reverseWords('a good   example'))