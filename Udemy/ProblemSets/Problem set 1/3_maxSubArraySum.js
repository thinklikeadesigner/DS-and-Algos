/*

given an array of integers and a number write a function called maxSubArraySum which finds the max sum of a subarray with the length of the number passed to the funcion

note that a subarray must consist of consecutivee elements from the original array
in the first example bellow [100, 200, 300] is a subarray of the original array but [100, 300] is not

Constraints:
Time complexity - O(n)
space complexity - O(1)


*/

function maxSubarraySum(arr, num){
    // add whatever parameters you deem necessary - good luck!
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    //sets initial sliding window size
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    // shifts window until reaches end of arr
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
  console.log(maxSubarraySum([100,200,300,400],2)) // 700
  console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4)) // 39
  console.log(maxSubarraySum([-3,4,0,-2,6,-1],2)) // 5
  console.log(maxSubarraySum([2,3],3)) //null