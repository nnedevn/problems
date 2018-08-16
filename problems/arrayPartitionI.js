/**
 * @param {number[]} nums
 * @return {number}
 */
function arrayPairSum(nums){
  // nums = nums.sort((a, b) => a > b);
  let result =  0;
  let group = [];

    for (let i = 0; i <nums.length; i+=2) {
      console.log(nums[i], 'num 1');
      console.log(nums[i + 1], 'num 2');
     
      group.push(nums[i], nums[i+1]);
      console.log('group ',group);
      result += Math.min(...group);
      console.log('loop result', result);
      group = [];
    }



  return result;
}

// console.log(arrayPairSum([11, 41, -9046, 2047, 1118, 8477, 8446, 279, 4925, 7380, -1719, 3855]));
console.log(arrayPairSum([2,3,1,4]));


