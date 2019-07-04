function merge(a1, a2){
  let result = [];
  while (a1.length > 0 && a2.length > 0){
    if (a1[0] > a2[0]){
      result.push(a2.shift());
    } else {
      result.push(a1.shift());
    }
  }
  return result.concat(a1).concat(a2);
}

function mergeSort(arr){
  if (arr.length <=1 ){
    return arr;
  } else {
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}

console.log(mergeSort([2, 5, 1, 3, 7, 2, 3, 8, 6, 3]))

