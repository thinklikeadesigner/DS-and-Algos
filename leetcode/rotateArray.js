const treeify = require('treeify');
function print(x) {
  console.log(x)
}
// /*
//   Rotate Array

// Solution
// Given an array, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105
 

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?
// */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//  var rotate = function(nums, k) {
// let i = 0;

// if (k === 1 || k === 0)  { return nums}

// if (k === 2) {
//   if (k % 2 === 0) {return nums}
//   else {
//     nums[0], nums[1] = nums[1], nums[0]
//   }
// }

// var last2 = nums.splice(-k, k);
// nums.unshift(...last2)




// print(nums)
// return nums
// };

module.exports = rotate

function rotate(nums, k){
if (k===0) return nums;

if (nums.length === 0 || nums.length === 1) return nums

if (nums.length === 2) {
  if (k === 0)  { return nums}
if (k % 2 === 1 ){
  let temp = nums[0]
nums[0] = nums[1]
nums[1] = temp

}
  return nums
}
var last2 = nums.splice(-k, k);
nums.unshift(...last2)
return nums
}


function rotateFast(nums, k){
  if (nums.length > k) {
    nums.unshift(...nums.splice(-k))
}
else
{let i = 0
while (i < k)
{
  // print("a i " + nums + " " + i)
  nums.unshift(...nums.splice(-1))
i++ }}
return nums
}


rotate([1,2], 0)
rotate([1,2], 1)
rotate([1,2], 2)
rotate([1,2], 3)
rotate([1,2], 4)

rotateFast([9,2], 0)
rotateFast([1,2], 1)
rotateFast([1,2], 2)
rotateFast([1,2], 3)
rotateFast([1,2,4,6,2,6,4,6,3,4], 4)

// print(treeify.asTree(rotateFast([1,2,4,6,2,6,4,6,3,4], 4), true))