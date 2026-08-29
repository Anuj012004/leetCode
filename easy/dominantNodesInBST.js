// 3997. Count Dominant Nodes in a Binary Tree
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given the root of a complete binary tree.

// A node x is called dominant if its value is equal to the maximum value among all nodes in the subtree rooted at x.

// Return the number of dominant nodes in the tree.

 

// Example 1:



// Input: root = [5,3,8,2,4,7,1]

// Output: 5

// Explanation:

// The leaf nodes with values 2, 4, 7, and 1 are dominant.
// The node with value 8 is dominant because its value is the maximum value in its subtree [8, 7, 1].
// Thus, the answer is 5.
// Example 2:



// Input: root = [1,2,3,1,2]

// Output: 4

// Explanation:

// The leaf nodes with values 1, 2, and 3 are dominant.
// The node with value 2 whose subtree is [2, 1, 2] is dominant because its value is the maximum value in its subtree.
// Thus, the answer is 4.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 105].
// 1 <= Node.val <= 109
// The tree is guaranteed to be a complete binary tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countDominantNodes = function(root) {
    //root, left, right
    let counter = 0
    function helper(node){
        if(node===null){
            return 0
        }
        let left = helper(node.left)
        let right = helper(node.right)

        if(node.val>=left && node.val>=right){
            counter++
        }
        return Math.max(node.val,left,right)
    }
    helper(root)
    return counter
};