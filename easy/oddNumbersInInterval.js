// 1523. Count Odd Numbers in an Interval Range
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 

// Example 1:

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].
// Example 2:

// Input: low = 8, high = 10
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].
 

// Constraints:

// 0 <= low <= high <= 10^9


// two non-negative int -> low and high -> can be zero,low always<high
//return -> odd number between low and high, low and high are also inclusive,

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    //counter to count the odd numbers
    let counter = 0
    //loop to check odd number
    for(let i=low; i<=high; i++){
        //if found counter++
        if(i%2!==0){
            counter++
        }
    }
    //return counter
    return counter
};

//test cases
console.log(countOdds(3,7),'3')
console.log(countOdds(8,10),'1')