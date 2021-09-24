const firstWord = (str = '') => {
    let stack = []
    for(let i =0; i < str.length; i++){
        if(stack[0] === str[i]){
            stack.shift()
        }
        else{
            stack.unshift(str[i])
        }
    }
    console.log(stack.reverse().join(''))
}


firstWord("abbaca")