// 100. Same Tree
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

// Example 1:


// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:


// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:


// Input: p = [1,2,1], q = [1,1,2]
// Output: false

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    let queue1 = [p]
    let queue2 = [q]
    while (queue1.length > 0 && queue2.length > 0) {
        let node1 = queue1.shift()
        let node2 = queue2.shift()
        if (node1 === null && node2 === null) {
            continue
        }
        if (node1 === null || node2 === null) return false
        if (node1.val !== node2.val) {
            return false
        }


        queue1.push(node1.left)
        queue1.push(node1.right)


        queue2.push(node2.left)
        queue2.push(node2.right)
    }
    return true
};