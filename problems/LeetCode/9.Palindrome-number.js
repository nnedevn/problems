//Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let strNum = x.toString();
  for (let i = 0; i < strNum.length / 2; i++) {
    if (strNum[i] !== strNum[strNum.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121));

isPalindrome(-121); // false
isPalindrome(121); // true
isPalindrome(10); // false
