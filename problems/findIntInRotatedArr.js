function binarySearch(arr, start, end, term) {
  
  let mid = Math.floor((start + end) / 2);

  while (arr[mid]!==term && start <= end) {
   
    if (arr[mid] < term) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return arr[mid] === term ? mid : -1;
}

function findPivotIndex(arr) {
  let start = 0;
  let end = arr.length - 1;

  if (arr[start] <= arr[end]) {
    return -1;
  }

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) {
      return mid + 1;
    } else {
      if (arr[mid] > arr[start]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

function findInRotatedArr(arr, value) {
  let pivot = findPivotIndex(arr); 
  if (value > arr[arr.length - 1]) {
    return binarySearch(arr, 0, pivot -1 , value);
  } else {
    return binarySearch(arr, pivot , arr.length - 1, value);
  }
}

console.log(findInRotatedArr([3, 4, 5, 6, 7, 8, 9, 1, 2],5));

// console.log(binarySearch([1,2,3,4,5], 0, 4, 4));