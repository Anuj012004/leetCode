// 509. Fibonacci Number
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

 

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 

// Constraints:

// 0 <= n <= 30

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    //create a memo to store the nth fib
    //create a function to find nthfib
    //if fib exist in memo return it
    // we know 0th fib is 0 and ist is 1
    // the recursive relation is fib(n) = fib(n-1)+fib(n-2)
    //store it in memo
    //return it 
    //call the function

    let memo = {}
    let findnthFib = function(n){
        if(n in memo) return memo[n]
        if(n===0) return 0
        if(n===1) return 1
        memo[n] = findnthFib(n-1) + findnthFib(n-2)
        return memo[n]
    }
    return findnthFib(n)
};