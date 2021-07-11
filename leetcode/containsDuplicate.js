

`Contains Duplicate

Solution
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109`

// HASH TABLE
// function print(x) {
//     console.log(x);
//   }
  
//   const hash = (key, size) => {
//     let hashedKey = 0;
  
//     for (let i = 0; i < key.length; i++) {
//       hashedKey = key.charCodeAt(i);
//     }
  
//     return hashedKey % size;
//   };
 
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 function containsDuplicate(nums) {
    if (nums.length < 2) {return false}


    let obj = {}
   let i = 0;
    while (i + 1 < nums.length) {
            obj[nums[i]] = i;
        if (obj.hasOwnProperty(nums[i + 1])){
    return true
        };
        i++
    
}

        




// console.log(obj)
// console.log('false')
return false

    }



console.log(containsDuplicate([1,2,3,4, 9]))

module.exports = containsDuplicate

