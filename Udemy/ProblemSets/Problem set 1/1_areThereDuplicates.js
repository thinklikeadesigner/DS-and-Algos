  /*
implement a function which accepts a variable number of arguments and checks whether there are any duplicates among the arguments passed in. you can solve with frequency counter pattern or multiple pointer pattern

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(nlogn)
Space - O(1)


*/

// frequency counter solution

function areThereDuplicates(args) {
    // good luck. (supply any arguments you deem necessary.)
  
    // good luck. Add any arguments you deem necessary.
  
   let arr1 = Array.from(arguments)   
        if (arr1.length <= 0) {
          return false;
      }    
      let frequencyCounter1 = {}
  
      for (let val of arr1) {
          frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
      }
  
  
      for (let key in frequencyCounter1) {
  
          if (frequencyCounter1[key] > 1) {
              return true
          }
      }
      return false
  }
  



function areThereDuplicates(args) {
    // good luck. (supply any arguments you deem necessary.)
   let arr = Array.from(arguments)   
      var i = 0;
      for(var j = 1; j < arr.length; j++){
          if(arr[i] === arr[j]){
              print('true')
         return true
          } 
            
          }
            return false;
      }
    
  areThereDuplicates(1, 2, 3) // false
  areThereDuplicates(1, 2, 2) // true
  areThereDuplicates('a', 'b', 'c', 'a') // true