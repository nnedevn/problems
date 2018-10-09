/**
* Given an string in roman no format (s)  your task is to convert it to integer .

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

for (let i = 0; i < romanArr.length; i++){
  if (roman.substring(position, position + romanArr[i].length) === romanArr[i]){
    do{
      result += intArr[i];
      position += romanArr[i].length
    } while (roman.substring(position, position + romanArr[i].length) === romanArr[i] )
  } 
}
  return result;
}

console.log(romanToInt("MCMV"));
