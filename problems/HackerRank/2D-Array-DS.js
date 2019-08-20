/**
 * https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * @param {Array} arr
 * @returns{int} 
 */

function calculateHourglassValues(arr) {
  let arrCols = arr[0].length;
  let arrRows = arr.length;

  let highestSum = Number.NEGATIVE_INFINITY;

  for (let row = 0; row < arrRows - 2; row++) {
    let temp = 0;

    for (let col = 0; col < arrCols - 2; col++) {
      temp =
        arr[row][col] +
        arr[row][col + 1] +
        arr[row][col + 2] +
        arr[row + 1][col + 1] +
        arr[row + 2][col] +
        arr[row + 2][col + 1] +
        arr[row + 2][col + 2];

      highestSum = Math.max(temp, highestSum);
    }
  }

  return highestSum;
}

const ROWS = 3;
const COLS = 3;
let testArr = [];

// for (let i = 0; i < ROWS; i++) {
//   testArr[i] = [];
//   for (let j = 0; j < COLS; j++) {
//     testArr[i][j] = Math.floor(Math.random() * 10);
//   }
// }

testArr = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
];

console.table(testArr);
console.log(calculateHourglassValues(testArr));
