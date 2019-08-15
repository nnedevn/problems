const findPairs = function(arr) {
  let sockTypes = {};
  let numberOfPairs = 0;
  for (number of arr) {
    if (sockTypes[number]) {
      sockTypes[number]++;
    } else {
      sockTypes[number] = 1;
    }

    if (sockTypes[number] - 2 >= 0) {
      numberOfPairs++;
      sockTypes[number] -= 2;
    }
  }

  return numberOfPairs;
};

console.log(findPairs([10, 20, 20, 10, 10, 30, 50, 10, 20]));
