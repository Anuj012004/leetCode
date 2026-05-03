// 3918. Sum of Primes Between Number and Its Reverse
// Solved
// Medium
// premium lock icon
// Companies
// Hint
// You are given an integer n.

// Let r be the integer formed by reversing the digits of n.

// Return the sum of all prime numbers between min(n, r) and max(n, r), inclusive.

 

// Example 1:

// Input: n = 13

// Output: 132

// Explanation:

// The reverse of 13 is 31. Thus, the range is [13, 31].
// The prime numbers in this range are 13, 17, 19, 23, 29, and 31.
// The sum of these prime numbers is 13 + 17 + 19 + 23 + 29 + 31 = 132.
// Example 2:

// Input: n = 10

// Output: 17

// Explanation:

// The reverse of 10 is 1. Thus, the range is [1, 10].
// The prime numbers in this range are 2, 3, 5, and 7.
// The sum of these prime numbers is 2 + 3 + 5 + 7 = 17.
// Example 3:

// Input: n = 8

// Output: 0

// Explanation:

// The reverse of 8 is 8. Thus, the range is [8, 8].
// There are no prime numbers in this range, so the sum is 0.
 

// Constraints:

// 1 <= n <= 1000

/**
 * @param {number} n
 * @return {number}
 */
var sumOfPrimesInRange = function(n) {
    let revN = Number(n.toString().split('').reverse().join(''))
    let sum = 0
    function isPrime(num) {
        if(num<2) return false
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num%i===0){
                return false
            }
        }
        return true
    }
    let start = Math.min(n,revN)
    let end = Math.max(n,revN)
    for(let i=start; i<=end; i++){
        if(isPrime(i)){
            sum+=i
        }
    }
    return sum
};