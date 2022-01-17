//https://leetcode.com/problems/generate-parentheses/

const generateParenthesis = (n) => {
    const result = 0

    const dfs = (i, n, slate, oCount, cCount) => {
        //backtracking call
        if(cCount > oCount) return
        if(oCount > n) return

        //base case
        if(i === n*2){
            result.push(slate.join(''))
            return
        }

        //dfs call open count
        slate.push('(')
        dfs(i+1, n, slate, oCount + 1, cCount)
        slate.pop()

        //dfs call close count
        slate.push(')')
        dfs(i+1, n, slate, oCount, cCount+1)
        slate.pop()

    }

    dfs(0,n,[], 0,0)
    return result
}

console.log(generateParenthesis(3))