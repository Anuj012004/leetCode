// 507. Perfect Number
// Easy
// Topics
// premium lock icon
// Companies
// A perfect number is a positive integer that is equal to the sum of its positive divisors, 
// excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

// Given an integer n, return true if n is a perfect number, otherwise return false.

 

// Example 1:

// Input: num = 28
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.
// Example 2:

// Input: num = 7
// Output: false
 

// Constraints:

// 1 <= num <= 108

//integer -> positive, cannot be zero, non-negative, always number 
// perfect number -> divisible by more that one number 
//boolean, true||false, for perfect num -> true else false

//example : 1. 5 -> only one divisor -> false
// 30 -> divisible by 2,3,5,6,15,30, -> true


/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
//    let sum = 0
//    for(let i=1; i<num; i++){
//     if(num%i===0){
//         sum+=i
//     }
//    }
//   return  num===sum

//Optimized
     if (num <= 1) return false
    let sum = 1
    for(let i= 2; i * i<= num; i++){
        if(num%i===0){
            sum+=i
        
        if (i !== num / i) { 
            sum += num / i;
            }
        }
    }
    return num===sum
};

//Test Cases

console.log(checkPerfectNumber(28),'it should be true')
console.log(checkPerfectNumber(7),'it should be false')