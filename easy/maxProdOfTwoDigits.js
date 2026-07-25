// 3536. Maximum Product of Two Digits
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given a positive integer n.

// Return the maximum product of any two digits in n.

// Note: You may use the same digit twice if it appears more than once in n.

 

// Example 1:

// Input: n = 31

// Output: 3

// Explanation:

// The digits of n are [3, 1].
// The possible products of any two digits are: 3 * 1 = 3.
// The maximum product is 3.
// Example 2:

// Input: n = 22

// Output: 4

// Explanation:

// The digits of n are [2, 2].
// The possible products of any two digits are: 2 * 2 = 4.
// The maximum product is 4.
// Example 3:

// Input: n = 124

// Output: 8

// Explanation:

// The digits of n are [1, 2, 4].
// The possible products of any two digits are: 1 * 2 = 2, 1 * 4 = 4, 2 * 4 = 8.
// The maximum product is 8.
 

// Constraints:

// 10 <= n <= 109

/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
   //max prod of two digits
   // we can use the same digit twice if it appeared more than once

   //three ways to solve it use map, without map, use split, sort 
   //ideal solution is without map 

   //without map
   
   let largest = 0
   let secondLargest = 0
   while(n>0){
    let digit = n%10
    if(digit>=largest){
        secondLargest = largest
        largest = digit
    }else if(digit>secondLargest && digit<largest){
        secondLargest = digit
    }
    n = Math.floor(n/10)
   }
   return largest*secondLargest
};


//with map
/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
   //max prod of two digits
   // we can use the same digit twice if it appeared more than once
   //create a map with count
   let map = new Map()
   while(n>0){
    let digit = n%10
    map.set(digit,(map.get(digit)||0)+1)
    n = Math.floor(n/10)
   }
   let largest = -Infinity
   let secondLargest = -Infinity
   for(let [key] of map){
    if(key>largest){
        secondLargest = largest
        largest = key
    }else if(key>secondLargest && key<largest){
        secondLargest = key
    }
   }
   if(map.get(largest)>1) return largest*largest
   if(secondLargest === -Infinity) return 0
   return largest*secondLargest
};