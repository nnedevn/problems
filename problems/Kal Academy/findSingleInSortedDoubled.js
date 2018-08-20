//Find the element that appears once in a sorted array where all other elements appear twice one after another. Find that element in 0(logn) complexity.

function findElement(arr) {
 
  let start = 0;
  let end = arr.length - 1;

  while (start <= end && arr.length % 2 != 0 ) {
    if (start === end) {
      return start;
    }

    let mid = Math.floor((start + end) / 2);
    if (mid % 2 === 0) {
      if (arr[mid] === arr[mid + 1]) {
        start = mid + 2;
      } else {
        end = mid - 2;
      }
    } else {
      if (arr[mid] === arr[mid - 1]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

}

console.log(findElement([2,2,3,3,4]))