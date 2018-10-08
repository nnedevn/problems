/*
* Given two strings, the task is to find if a string ('a') can be obtained by rotating another string ('b') by two places.
*/

function rotatedByTwo(s1, s2){
  let leftRotated = s1.slice(2, s1.length) + s1.slice(0,2);
  let rightRotated = s1.slice(0,2) + s1.slice(2, s1.length )
  return leftRotated === s2 || rightRotated === s2;
} 

console.log(rotatedByTwo('1234', '3412'));