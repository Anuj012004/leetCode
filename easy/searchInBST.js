// 700. Search in a Binary Search Tree
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

 

// Example 1:


// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
// Example 2:


// Input: root = [4,2,7,1,3], val = 5
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [1, 5000].
// 1 <= Node.val <= 107
// root is a binary search tree.
// 1 <= val <= 107



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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    //root,left then right //preorder
    //if node val === val 
    //return left and right 
    //return null
 
    function helper(node,val){
        if(node===null){
            return null
        }
        if(node.val===val){
            return node
        }
        if(node.val>val){
            return helper(node.left,val)
        }
        return helper(node.right,val)
    }
    return helper(root,val)
   
};