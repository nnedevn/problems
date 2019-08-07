/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let storage = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      storage.push(s[i]);
    }

    if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
      if (s[i] === ')' && storage[storage.length - 1] === '(') {
        storage.pop();
      } else if (s[i] === ']' && storage[storage.length - 1] === '[') {
        storage.pop();
      } else if (s[i] === '}' && storage[storage.length - 1] === '{') {
        storage.pop();
      } else {
        return false;
      }
    }
  }
  return storage.length > 0 ? false : true;
};

console.log(isValid('(([]))')); // true
console.log(isValid('([)}')); //false
