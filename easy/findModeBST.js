// 501. Find Mode in Binary Search Tree
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

// If the tree has more than one mode, return them in any order.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:


// Input: root = [1,null,2,2]
// Output: [2]
// Example 2:

// Input: root = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -105 <= Node.val <= 105

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
 * @return {number[]}
 */
var findMode = function(root) {
    //mode = most frequent element
    //trav the tree
    //store the val in an arr 
    //create map 
    //return the frequent ele

    let arr = []
    if(root===null){
        return []
    }
    if(root.left===null && root.right===null){
        return [root.val]
    }
    function helper(node){
        if(node===null){
            return 
        }
        helper(node.left)
        arr.push(node.val)
        helper(node.right)
    }
    helper(root)
    let map = new Map()
    for(let a of arr){
        map.set(a,(map.get(a)||0)+1)
    }
    let freq = -Infinity
    let ele = []
    for(let [key,val] of map){
        if(val>freq){
            freq = val
        }
    }
    for(let [key,val] of map){
        if(val===freq){
            ele.push(key)
        }
    }
    return ele
};