/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currentMax = nums[0];
  let globalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], nums[i] + currentMax);
    if (currentMax > globalMax) {
      globalMax = currentMax;
    }
  }

  return globalMax;
};

console.log(maxSubArray([-2, 3, 2, -1]));
