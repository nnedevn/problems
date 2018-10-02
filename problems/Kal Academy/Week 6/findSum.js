/**
  * Given an unsorted array of nonnegative integers, find a continous subarray which adds to a given number.
 */

function findSum(arr, sum) {
  let currentSum = arr[0];
  let subArrTail = 0;
  let subArrHead = 1;

  while (subArrHead < arr.length) {
    while (currentSum > sum && subArrTail < subArrHead - 1) {
      currentSum = currentSum - arr[subArrTail];
      subArrTail += 1;
    }

    if (currentSum === sum){
      return ("The subaray is located between " + subArrTail + ' and ' + (subArrHead-1));
    }

    if (subArrHead < arr.length){
      currentSum = currentSum + arr[subArrHead];
    }
    subArrHead ++;
  }
  return "No subaray found.";
}

console.log(findSum([15, 2, 4, 8, 9, 5, 10, 23] , 23));
