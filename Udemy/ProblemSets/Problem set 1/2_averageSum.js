// given sorted array of integers, determine if there is a pair of values where the avg of the two values equals the target


function averagePair(arr, target){
    // add whatever parameters you deem necessary - good luck!
    // add whatever parameters you deem necessary - good luck!
    if (!arr) return false
        let left = 0
      let right = arr.length - 1
      while (left < right) {
          console.log(`left ${arr[left]}`)
          console.log(`right ${arr[right]}`)
          let sum = (arr[left] + arr[right])/2
          console.log(`sum ${sum}`)
          if (sum === target) {
              return true
          } else if (sum > target) {
              right--
          } else {
              left++
          }
      }
      return false
  }


averagePair([1,2,3], 2.5) // true
averagePair([1,3,3, 5, 6, 7, 20, 12, 19, 8], 2.5) // true
averagePair([-1,0,3, 4, 5, 6], 4.1) // false
averagePair([], 4) // false