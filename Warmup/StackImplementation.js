class Stack {
  stackArr;
  constructor() {
    // Initialize your stack
    this.stackArr = [];
  }

  push(element) {
    // Add element to the top
    this.stackArr.push(element);
    return this.stackArr.length;
  }

  pop() {
    // Remove and return top element
    if (this.stackArr.length == 0) {
      return undefined;
    }
    const popped = this.stackArr[this.stackArr.length - 1];
    this.stackArr.pop();
    return popped;
  }

  peek() {
    // Return top element without removing
    if (this.stackArr.length == 0) {
      return undefined;
    }
    return this.stackArr[this.stackArr.length - 1];
  }

  isEmpty() {
    // Check if stack is empty
    if (this.stackArr.length) {
      return false;
    }
    return true;
    // this.stackArr.length == 0 ? return true: return false
  }

  size() {
    // Return number of elements
    return this.stackArr.length;
  }

  clear() {
    // Remove all elements
    this.stackArr.length = 0;
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
// true
console.log(stack.push(10));
//1
console.log(stack.push({ hello: "hi" }));
// 2
console.log(stack.push("hello"));
//3
console.log(stack.size());
//3
console.log(stack.peek());
// 30
console.log(stack.pop());
// 30
console.log(stack.peek());
//20
console.log(stack.clear());
console.log(stack.isEmpty());
// true
console.log(stack.pop());
// 30
console.log(stack.peek());
