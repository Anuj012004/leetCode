// 530. Minimum Absolute Difference in BST
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

 

// Example 1:


// Input: root = [4,2,6,1,3]
// Output: 1
// Example 2:


// Input: root = [1,0,48,null,null,12,49]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [2, 104].
// 0 <= Node.val <= 105


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
var getMinimumDifference = function(root) {
    let arr = []
    function helper(node){
        if(node===null){
            return
        }
         helper(node.left)
        arr.push(node.val)
         helper(node.right)
    }
    helper(root)
    let min = Infinity
    for(let i=1; i<arr.length; i++){
        min = Math.min(min,(arr[i]-arr[i-1]))
    }
    return min
};