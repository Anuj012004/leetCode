// 1015. Smallest Integer Divisible by K
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a positive integer k, you need to find the length of the smallest positive integer n such that n is divisible by k, and n only contains the digit 1.

// Return the length of n. If there is no such n, return -1.

// Note: n may not fit in a 64-bit signed integer.

 

// Example 1:

// Input: k = 1
// Output: 1
// Explanation: The smallest answer is n = 1, which has length 1.
// Example 2:

// Input: k = 2
// Output: -1
// Explanation: There is no such positive integer n divisible by 2.
// Example 3:

// Input: k = 3
// Output: 3
// Explanation: The smallest answer is n = 111, which has length 3.
 

// Constraints:

// 1 <= k <= 105

//------------------------------------
// positive int K -> always integer, not a negative number, cannot be zero
//find the length of the smallest digit n -> n is divisible by k  -> n can only contain 1 digit, fully divisible no remainder

//example 
//let k = 1 --> smallest digit n is 1 -> 1 is div by 1 -> it contain single 1 so output would be 1
// output 1

//let k = 3
//output 3 
/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    // Numbers divisible by 2 or 5 can never divide a repunit
    if (k % 2 === 0 || k % 5 === 0) return -1;

    let remainder = 0;

    for (let length = 1; length <= k; length++) {
        remainder = (remainder * 10 + 1) % k;
        if (remainder === 0) {
            return length;
        }
    }

    return -1;

    
};

//test cases

console.log(smallestRepunitDivByK(1),'1')
console.log(smallestRepunitDivByK(3),'3')