/*
minSubarrayLen accepts 2 parameters - an array of positive integers, and a positive integer.
the func should return the min len of a contiguous subarray of which the sum is greater or equal to the integer passed to the function. if there isn't one, return 0

constraints:
time complexity - O(n)
space complexity - O(1)



*/

function minSubArrayLen(nums, sum){
 let total = 0
 let start = 0;
 let end = 0
 let minLen = Infinity
while (start < nums.length){
    if (total < sum && end < nums.length){
      total += nums[end];
      end++
    }
    else if (total >= sum) {
        minLen = Math.min(minLen, end - start)
        total -=nums[start]
        start++
    }

    else {
        break;
    }
}
return minLen === Infinity ? 0 : minLen;

}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> bc [4,3] is the smallest sub
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> bc [62] is greater than 52
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> bc [5,4] is the smallest sub
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)) // 5
console.log(minSubArrayLen([4,3,3,8,1,2,3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)) // 0