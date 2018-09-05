//Find the first instance of an element in an array where the difference between adjasent elements is 1.

function findValue(arr, val){
  let step = Math.abs(arr[0] - val);

  for (let i = 0; i<arr.length; i+=step){
    if (arr[i] === val){
      return i;
    }
    step = Math.abs(arr[i]-val);
  }
  return -1;
}

console.log(findValue([1,2,3,2,1,0,-1,-2,-3,-4,-5,-4,-3,-2], -2));