// 103. Binary Tree Zigzag Level Order Traversal
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let res = []
    if (root === null) return res
    let queue = [root]
    let leftToRight = true
    while (queue.length > 0) {
        let size = queue.length
        let level = []
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            if (leftToRight) {
                level.push(node.val);
            } else {
                level.unshift(node.val);
            }

            if(node.left!==null) queue.push(node.left)
            if(node.right!==null) queue.push(node.right)

        }
        res.push(level)
        leftToRight = !leftToRight
    }
    return res
};