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
class Stack{
  constructor(){
      this.count = 0;
      this.storage = {};
  }
};

//Adds a value to the end(top) of the stack
Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

// Removes and returns the value at the end of the stack;

Stack.prototype.pop = function() {
  // check to see if the stack is empty
  if (this.count === 0) {
    return undefined;
  }

  this.count--;
  let result = this.storage[this.count];
  delete this.storage[this.count];

  return result;
};

Stack.prototype.peek = function() {
  return this.storage[this.count - 1];
};

Stack.prototype.size = function() {
  return this.count;
};

// Reverse a stack using another stack and a single temp varaiable

let st1 = new Stack();
let st2 = new Stack();
let temp = null;

// for (let i = 0; i < 30; i++) {
//   st1.push(i);
// }

st1.push('first');
st1.push('second');
st1.push('third');
st1.push('forth');


for (let i = 0; i < st1.size(); i++) {
  temp = st1.pop();

  count = st1.size() - i;

  while (count > 0) {
    st2.push(st1.pop());
    count--;
  }

  st1.push(temp);

  count = st2.size();
  while (count > 0) {
    st1.push(st2.pop());
    count--;
  }
}

console.log("stack2 =", st2);
console.log("stack1 =", st1);
console.log("stack1 size =", st1.size());
