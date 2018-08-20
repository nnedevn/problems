// Create Stack class/constructor
//   create and set count to 0
//   create storage object
// Create push method on Stack prototype
//   Add the given value into storage w/ a key of current count
//   Increment count
// Create pop method on Stack prototype
//   Check to see if stack is empty
//     if so, return undefined
//   Decrement count
//   Save element at top of stack to a var (to later return)
//   Delete that element from storage
//   Return saved element
// Create size method on Stack prototype
//   Return count 

// Create a Stack
let Stack = function(){
  this.count = 0;
  this.storage = {}
}

//Adds a value to the end(top) of the stack
Stack.prototype.push = function(value){
  this.storage[this.count] = value;
  this.count ++;
}

// Removes and returns the value at the end of the stack;

Stack.prototype.pop = function(){
  // check to see if the stack is empty
  if (this.count === 0) {
    return undefined;
  }

  this.count --;
  let result = this.storage[this.count];
  delete this.storage[this.count];
  
  return result;
}

Stack.prototype.peek = function(){
  return this.storage[this.count - 1];
}

Stack.prototype.size = function(){
  return this.count;
}

let myStack = new Stack;

myStack.push('lalal');
myStack.push("something else");
myStack.push('the last one');
// console.log(myStack);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
 console.log(myStack.size());