class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  //Add element to top of the stack
  push(ele) {
    this.items[this.count] = ele;
    this.count++;
  }
  //remove top element from stack
  pop() {
    if (this.count === 0) {
      return null;
    }
    let deletedItem = this.items[this.count - 1];
    console.log(`${deletedItem} is removed from the stack`);
    this.count--;
  }

  //check top element in the stack
  peek() {
    let temp = this.items[this.count - 1];
    console.log(`${temp} is the top element`);
  }

  //check the stack is empty
  isEmpty() {
    console.log(this.count === 0 ? "stack is empty" : "stack is not empty");
  }

  //check the size of the stack
  size() {
    console.log(`size of the stack is ${this.count}`);
  }

  //print the values of the stack
  printStack() {
    let str = "";
    for (let i = 0; i < this.count; i++) {
      str = str + this.items[i] + " ";
    }
    console.log(str);
  }

  //clear the stack
  clearStack() {
    this.items = [];
    this.count = 0;
  }
}

let stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
stack.peek();

stack.printStack();

stack.pop();
stack.printStack();
stack.peek();
stack.isEmpty();
stack.size();
