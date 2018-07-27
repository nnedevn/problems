/**
 * @param {int} intNum
 * @return {Str}
 */

function romanNumeralConverter(inputNum) {
  let result = "";
  let romanNums = ["M", "CM", "D", "CD", "C", "XC", "L", "XL","X", "IX", "V", "IV", "I"];
  let intNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for (let i = 0; i< intNums.length; i++){
    while (inputNum % intNums[i] < inputNum ){
      result += romanNums[i]
      inputNum -= intNums[i];
    }
  }
  return result;
}

console.log(romanNumeralConverter(123));
