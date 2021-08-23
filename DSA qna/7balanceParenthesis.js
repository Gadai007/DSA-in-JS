const balanceParenthesis = (str) => {
    let stack = []

    for(let i = 0; i < str.length; i++){
        if(str[i] == '(' || str[i] == '{' || str[i] == '['){
            stack.push(str[i])
        }
        if(str[i] == ')' || str[i] == '}' || str[i] == ']'){
            if(stack.length == 0){
                return false
            }

            let temp = stack.pop()
            if(temp == '(' && str[i] !== ')'){
                return false
            }
            if(temp == '{' && str[i] !== '}'){
                return false
            }
            if(temp == '[' && str[i] !== ']'){
                return false
            }
        }
    }

    if(stack.length == 0){
        return true
    }else{
        return false
    }
}

console.log(balanceParenthesis('[{}{}{}{}]'))