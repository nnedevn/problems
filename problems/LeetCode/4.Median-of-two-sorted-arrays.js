/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// Version one
var findMedianSortedArrays1 = function(nums1, nums2) {
  let resultArr = nums1.concat(nums2);

  resultArr = resultArr.sort((a, b) => a - b);

  if (resultArr.length % 2 === 0) {
    lower = resultArr[resultArr.length / 2 - 1];
    higher = resultArr[resultArr.length / 2];
    return (lower + higher) / 2;
  } else {
    return resultArr[(resultArr.length - 1) / 2];
  }
};

let arr1 = [3];
let arr2 = [-2, -1];

// console.log(findMedianSortedArrays1(arr1, arr2));

var findMedianSortedArrays2 = function(nums1, nums2) {
  let index1 = 0;
  let index2 = 0;
  let resultArr = [];

  while (arr1[index1] !== undefined && arr2[index2] !== undefined)
    if (nums1[index1] <= nums2[index2]) {
      resultArr.push(nums1[index1]);
      index1++;
    } else {
      resultArr.push(nums2[index2]);
      index2++;
    }

  if (index1 < nums1.length) {
    for (i = index1; i < nums1.length; i++) {
      resultArr.push(nums1[i]);
    }
  }

  if (index2 < nums2.length) {
    for (i = index1; i < nums1.length; i++) {
      resultArr.push(nums2[i]);
    }
  }

  if (resultArr.length % 2 === 0) {
    lower = resultArr[resultArr.length / 2 - 1];
    higher = resultArr[resultArr.length / 2];
    return (lower + higher) / 2;
  } else {
    return resultArr[(resultArr.length - 1) / 2];
  }
};

console.log(findMedianSortedArrays2(arr1, arr2));



// Version 3 - In Progress...
var findKthElement = function(nums1, nums2, k){
nums1 === null ?  nums2[k] : null
nums2 === null ? nums1[k] : null
}