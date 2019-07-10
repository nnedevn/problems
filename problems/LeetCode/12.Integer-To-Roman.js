/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let numArr = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
  ];
  let romanArr = [
    "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
  ];
  let result = '';
  let i = 0;

  while (num > 0) {
    if (num - numArr[i] >= 0) {
      result += romanArr[i];
      num -= numArr[i];
    } else {
      i++;
    }
  }

  return result;
};

console.log(intToRoman(3401));