function findNum(arr){
  let result = ((arr.length + 2)*(arr.length + 1))/2;
  for (let i = 0; i < arr.length; i++){
    result -= arr[i];
  }
  return result;
}

console.log(findNum([1,3,4,5,8,6,7]));
