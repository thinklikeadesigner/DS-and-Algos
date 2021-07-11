function print(x){console.log(x)}


// function twoSum(arr, target){

//     let obj = {}

//     for (let i = 0; i < arr.length; i++) {
//       let comp = target - arr[i]
 


// if(obj.hasOwnProperty(comp)) {

// return[i, obj[comp]];
// }
// else {
//   obj[arr[i]] = i;

// }
//     }
// }


// var twoSum = function(arr, target) {
    
//   let obj = {}
  
//   for (let i = 0; i < arr.length; i++) {
//   let comp = target - arr[i]
//   print(comp)
  
//   if (obj.hasOwnProperty(comp)){
//       return [i, obj[comp]]
//   }
      
//       else {
//           obj[arr[i]] = i;
//       }
  
//   }
  
  
  
// };

var twoSum = function(nums, target) {
    
  let obj = {}
  
  for (let i = 0; i < nums.length; i++) {
  let comp = target - nums[i]
  
  if (obj.hasOwnProperty(comp)){
      return [i, obj[comp]]
  }
      
      else {
          obj[nums[i]] = i
          
      }
  
  }
  
  
  
};

print(twoSum([6,31,5,6], 36))