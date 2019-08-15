/**
 * https://www.hackerrank.com/challenges/mini-max-sum/problem
 * @param {Array} arr 
 * @returns {String}
 */

const minMaxSum = function(arr) {
  arr = arr.sort((a, b) => a - b);
  let min = 0;
  let max = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
  }

  for (let i = 1; i < arr.length; i++) {
    max += arr[i];
  }

  return `${min}  ${max}`;
  // process.stdout.write(min + " " + max);
};

console.log(minMaxSum([1, 3, 5, 2, 4]));
