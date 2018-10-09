function findSubSetSum(arr, sum){
// create an array of integers with a length of sum + 1
let sumMatrix = new Array(sum+1);

//populate the first column
for (let i = 0; i <= arr.length; i++ ){
  
  sumMatrix[i] = new Array(sum);
  // for (let j = 0; j <= sum; j++){
  //   sumMatrix[i][0] = 0;
  // }
}

// for( let i = 0; i < sum; i++){
//   for (let j = 0; j < arr.length; j++){
//     sumMatrix
//   }
// }

console.log(sumMatrix);
}

console.log(findSubSetSum([1,2,3,4,5], 5));