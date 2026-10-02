// 22. Generate Parentheses
// Medium
// Topics
// premium lock icon
// Companies
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = [];

    function backtrack(current, open, close) {

        // We have used all parentheses
        if (current.length === 2 * n) {
            ans.push(current);
            return;
        }

        // We can add '(' if we still have some left
        if (open < n) {
            backtrack(current + "(", open + 1, close);
        }

        // We can add ')' only when it won't make the string invalid
        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);

    return ans;
};