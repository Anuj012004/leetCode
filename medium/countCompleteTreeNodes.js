// 222. Count Complete Tree Nodes
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given the root of a complete binary tree, return the number of the nodes in the tree.

// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Design an algorithm that runs in less than O(n) time complexity.

 

// Example 1:


// Input: root = [1,2,3,4,5,6]
// Output: 6
// Example 2:

// Input: root = []
// Output: 0
// Example 3:

// Input: root = [1]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5 * 104].
// 0 <= Node.val <= 5 * 104
// The tree is guaranteed to be complete.

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
var countNodes = function(root) {
    if(root===null) return 0
    //function to get height
    function getHeight(node,side){
        let height = 0
        while(node!==null){
            height++
        if(side==='left'){
            node = node.left
        }else{
           node = node.right
        }
        }
        return height
    }
    //cal height
    let leftHeight = getHeight(root,'left')
    let rightHeight = getHeight(root,'right')

    //if both heights equal means subtree balance
    if(leftHeight===rightHeight){
        return (2**leftHeight)-1
    }

    return 1 + countNodes(root.left)+countNodes(root.right)

};