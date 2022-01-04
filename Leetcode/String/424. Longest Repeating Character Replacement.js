const longestRepeatingChar = ( s= '', k=0) => {
    let left = 0
    let right = 0
    let maxCharCount = 0
    let visited = {}
    while(right < s.length){
        visited[s[right]] = visited[s[right]] ? visited[s[right]] + 1 : 1
        if(visited[s[right]] > maxCharCount){
            maxCharCount = visited[s[right]]
        }
        if(right - left + 1 - maxCharCount> k){
            visited[s[left]]--
            left++
        }
        right++
    }
    return right -left
}

console.log(longestRepeatingChar("AABABBA", 1))