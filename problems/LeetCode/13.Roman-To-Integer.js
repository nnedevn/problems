/**
* Given an string in roman no format (s)  your task is to convert it to integer.
 */
/**
 * 
 * @param {String} roman
 * @return {int}
 */

function romanToInt(roman) {
  let romanArr = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let intArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let position = 0
  let result = 0;

  for (let i = 0; i < romanArr.length; i++) {
    if (roman.substring(position, position + romanArr[i].length) === romanArr[i]) {
      do {
        result += intArr[i];
        position += romanArr[i].length
      } while (roman.substring(position, position + romanArr[i].length) === romanArr[i])
    }
  }
  return result;
}

/**
 * 
 * @param {String} roman
 * @return {int} 
 */
function romatToIntSimplified(romanStr) {
  if (romanStr.length === 0 || romanStr === null) { return }

  let romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let result = romanMap[romanStr[romanStr.length - 1]];

  for (let i = romanStr.length - 2; i >= 0; i--) {
    if (romanMap[romanStr[i]] >= romanMap[romanStr[i + 1]]) {
      result += romanMap[romanStr[i]];
    } else {
      result -= romanMap[romanStr[i]];
    }
  }

  return result;
}

console.log(romatToIntSimplified("MCMV"));
