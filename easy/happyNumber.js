// 202. Happy Number
// Easy
// Topics
// premium lock icon
// Companies
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false
 

// Constraints:

// 1 <= n <= 231 - 1

// we have number -> n -> always positive, n>0
// check if number is happy -> happy means starting with number n, find the sum of square of number n do till the number becomes 1
// if 1 number is happy number else number is not, for happy return true else return false
//example 

//let n = 15
//1^2 + 5^2 = 1+10 => 11 
//1^2 + 1^2 => 1+1 => 2 
//since 2!==1 return false

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    //set
    const set = new Set()
    function retrunSum(num){
        let sum =0
        while(num>0){
            //to get the last digit of number
            let digit = num%10
            //square it and add to the sum
            sum += digit * digit
            //remove last digit 
            num = Math.floor(num/10)
        }
        return sum
    }
    while(n!==1){
        //get the sum 
        n = retrunSum(n)
        if(set.has(n)) return false
        set.add(n)
    }
    return true
};

//TEST CASES

console.log(isHappy(15),'false')
console.log(isHappy(10),'true')
