/*
takes in 2 strings and checks whether the characters in the first string form a subsequence of the characters in the second string. should check whether characters in first string appear in second string without their order changing

Required:
time complexity - O(n + m)
space complexity - O(1)

*/


function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    
    let i = 0;
    let j = 0;
    if (!str1) return true
    while(j < str2.length){
        console.log(`str1 ${str1[i]} ${str1} str2 ${str2[j]} ${str2}`)
  
      if(str2[j] === str1[i])  i++;
     
       if(i === str1.length) return true;
    j++;
      
        
    }
    return false
  }
  
  
  console.log(isSubsequence('herello', 'hrerello world'))
  console.log(isSubsequence('sing', 'sting'))
  console.log(isSubsequence('abc', 'abracadabra'))
  console.log(isSubsequence('abc', 'acb'))
  
  