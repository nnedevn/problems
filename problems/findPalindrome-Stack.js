// Find if two words are a palindrome. 
// Use an array as a stack.

function palindromeArray(word1){
  let letters = [];
  let revWord = '';
  // push all the letters into a "stack"
  for (let i = 0; i < word1.length; i++){
    letters.push(word1[i]);
  }

  // pop off the letters
  for (let i = 0; i < word1.length; i++ ){
    revWord += letters.pop();
  }
  if ( revWord === word1){
    return "It is a palindrome."
  }
  return "It is not a palindrome."
}

console.log(palindromeArray('racecar'));

class Stack {
  constructor(){
    this.size = 0;
    this.data = {}
  }

  push(data){
    this.data[this.size] = data;
    this.size +=1;
  }

  pop(){
    this.size -=1;
    const result = this.data[this.size];
    delete this.data[this.size];
    return result;
  }

  size(){
    return this.size;
  }

  peer(){
    return this.data[this.size - 1];
  }
}

