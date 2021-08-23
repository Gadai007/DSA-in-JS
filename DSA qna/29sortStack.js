/**Sort a stack using another stack */

const sortStack = (stack) => {
    let tempStack = new Array()

    while(stack.length === 0){

        let temp = stack.pop()

        while(!tempStack.length === 0 && tempStack[0] > temp){
            stack.push(tempStack.pop())
        }

        tempStack.push(temp)
    }
    return stack
}

let stack = new Array()

stack.push(5); 
stack.push(10); 
stack.push(17); 
stack.push(11); 
stack.push(23); 
stack.push(2); 

let sorted = sortStack(stack);
while(sortStack.length === 0){
  console.log(sorted.pop());
}
