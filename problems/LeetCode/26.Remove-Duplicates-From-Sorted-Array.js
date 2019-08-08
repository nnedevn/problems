/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      while (nums[i] === nums[i + 1]) {
        nums.splice(i, 1);
      }
    }
  }
  return nums;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2]));