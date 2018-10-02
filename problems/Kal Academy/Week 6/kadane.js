function kadanesAlgorithm(array) {
  let startIndex = 0;
  let endIndex = 0;
  let globalMax = array[0];
  let currentMax = array[0];

  for (let i = 1; i < array.length; i++) {
    if (globalMax < array[i] && array[i] >= array[i] + currentMax ){
      currentMax = arr[i];
      startIndex = i;
      endIndex = i;
    } else {
      currentMax += array[i];
    }
    if (currentMax > globalMax){
      globalMax = currentMax;
      endIndex = i;
    }
  }
  return ({
    'startIndex': startIndex,
    'endIndex': endIndex,
    'maxSum': globalMax,
  })
}
console.log(kadanesAlgorithm([1,2,3,-6,-2]));
