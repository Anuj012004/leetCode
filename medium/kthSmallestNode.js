// 230. Kth Smallest Element in a BST
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

// Example 1:


// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Example 2:


// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3
 

// Constraints:

// The number of nodes in the tree is n.
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104
 

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr = []
    function trav(node){
        if(node==null){
            return 
        }
        trav(node.left)
        arr.push(node.val)
        trav(node.right)
    }
     trav(root)
    return arr[k-1]
};


//++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    function helper(node,i){
        if(node===null){
            return null
        }
        let left = helper(node.left)
        if(left!==null){
            return left
        }
        k--
        if(k==0){
            return node.val
        }
        return helper(node.right)
    }
    return helper(root,k)
};