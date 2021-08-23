/**Find the maximum depth of nested parentheses in a string */
const maxParenthesis = (str: string) : number => {
    let max: number = 0
    let totalMax: number = 0
    for(let i =0; i < str.length; i++){
        if(str[i] == '('){
            max++
            if(max > totalMax){
                totalMax = max
            }
        }else if(str[i] == ')'){
            if(max > 0){
                max--
            }else{
                return -1
            }
        }
    }
    if(max != 0){
        return -1
    }
    return totalMax
}

console.log(maxParenthesis('( p((q)) ((s)t) )'))