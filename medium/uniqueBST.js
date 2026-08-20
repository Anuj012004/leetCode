// 96. Unique Binary Search Trees
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

 

// Example 1:


// Input: n = 3
// Output: 5
// Example 2:

// Input: n = 1
// Output: 1
 

// Constraints:

// 1 <= n <= 19


/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    // function helper(start,end){
    //     if(start>end){
    //         return 1
    //     }
    //     let total = 0
    //     for(let root=start; root<=end; root++){
    //         let left = helper(start, root-1)
    //         let right = helper(root+1, end)
    //         total += left*right
    //     }
    //     return total
    // }
    // return helper(1,n)
     let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * 2 * (2 * i - 1) / (i + 1);
    }

    return result;
};