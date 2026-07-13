// 142. Linked List Cycle II
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

 

// Example 1:


// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.
// Example 2:


// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.
// Example 3:


// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.
 

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.
 

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    //find the len of the cycle
    //move the s by the len of the cycle times
    //move s and f by 1 and it will meet

    let length = 0
        let s = head
        let f = head
    while(f!=null && f.next!=null){
        s = s.next
        f = f.next.next
        if(s==f){
            let temp = s.next
            length = 1
            while(temp !=s ){
                length++
                temp = temp.next
            }
            break
        }
    }
    if(length == 0) return null

    let slow = head
    let fast = head
    while(length>0){
        slow = slow.next
        length--
    }
    while(fast!=slow){
        fast = fast.next
        slow = slow.next
    }
    return slow
};