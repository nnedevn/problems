/**
 * @param {arr} arr
 * @param {func} func
 * @return {int} 
 */

function findElement(arr, func) {
  return arr. find(func);
  return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));