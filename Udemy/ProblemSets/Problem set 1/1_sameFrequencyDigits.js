  /*
given two positive integers, find out if the two numbers have the same frequency of digits

must be in time O(n)
*/

function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
  
      
      
  
  var digits1 = num1.toString().split('');
  var arr1 = digits1.map(Number)
  var digits2 = num2.toString().split('');
  var arr2 = digits2.map(Number)   
  
        if (arr1.length !== arr2.length) {
          return false;
      }    
      
      let frequencyCounter1 = {}
      let frequencyCounter2 = {}
      for (let val of arr1) {
          frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
      }
      for (let val of arr2) {
          frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
      }
      console.log(frequencyCounter1);
      console.log(frequencyCounter2);
      for (let key in frequencyCounter1) {
          if (!(key in frequencyCounter2)) {
              return false
          }
          if (frequencyCounter2[key] !== frequencyCounter1[key]) {
              return false
          }
      }
      return true
  }
  
  
  sameFrequency(182, 281) // true
  sameFrequency(34, 14) // false
  sameFrequency(3589578, 5879385) // true
  sameFrequency(22, 222) //false