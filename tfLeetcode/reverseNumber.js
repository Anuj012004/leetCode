// 7. Reverse Integer
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x>0?1:-1
    let n = ''
    let num = Math.abs(x)
    while(num>0){
        let d = num%10
        n +=d
        num = Math.floor(num/10)
    }
    let result =  sign*Number(n)
    if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
        return 0;
    }
    return result

};