function print(x) {
    console.log(x)
}

/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
 */

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
     var neg = false;
//turns number into string
    let string = `${x}`
    // turns string into array string nums
let arr =  string.split('')
// sets new empty array for new number
let newArr = [];

//checks for negative
if (arr[0] === '-') {
    neg = true;
    // print(arr)
    // print(neg)
} else {
// print(arr)
//     print(neg)
}


// reverses the number
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i])
    };
    let a = parseInt(newArr.join(''))

    if (Math.abs(a) < 0x7fffffff) {

        if (neg) {
            return a * -1
        } else {
            return a
        }
    } else {
        return 0
    }

 }
//  print(reverse(123))
// print(reverse(-123))
// print(reverse(120))
// print(reverse(0))
print(reverse(1563847412))
