// 1051. Height Checker
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// A school is trying to take an annual photo of all the students. 
// The students are asked to stand in a single file line in non-decreasing order by height. 
// Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in. 
// Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

 

// Example 1:

// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.
// Example 2:

// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.
// Example 3:

// Input: heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.
 

// Constraints:

// 1 <= heights.length <= 100
// 1 <= heights[i] <= 100

// have an array -> heights -> cannot be empty, heights[i] -> cannot be zero, cannot be negative always positive, !special symbols, not sorted
//return -> return the indicies(index) where the heights[i] !== expected[i], expected is arr of heights in increasing order, return 
//indicies in an array

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    //expected heights -- sort heights in an increasing order
    let expectedHeights = [...heights].sort((a,b)=>a-b)
    //arr to store non matching heights indicies
    let indices = []
    //use loop to check the heights
    for(let i=0; i<heights.length; i++){
        //if heights are not in expected position push indicies to the arr
        if(expectedHeights[i]!==heights[i]){
            indices.push(i)
        }
    }
    //return arr
    return indices.length
};

//TEST CASES
console.log(heightChecker([1,1,4,2,1,3]),'output 2,4,5')