//Find missing parenthesis in a given expression – 2 * ( 3 + 5(sasdfasdfasd)

// Create a stack
class Stack{
  constructor(){
    this.count = 0;
    this.storage = {}
  }

  push(value){
    this.storage[this.count] = value;
    this.count ++;
  }

  pop(){
    if (this.count === 0 ){
      return undefined;
    }

    this.count --
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result; 
  }

  size(){
    return this.count;
  }
}

let myStack = new Stack;

function findMissingParen(str){

  let parenStack = new Stack;

  for(let i = 0; i < str.length; i++){
    if (str[i] ==='('){
      parenStack.push(str[i]);
    } else if (str[i] === ')'){
      parenStack.pop();
    }
  }
  return (parenStack.size() != 0 ? 'There is an unclosed parenthesis. ' : -1);
}

console.log(findMissingParen('2 * ( 3 + 5(sasdfasdfasd)'))
