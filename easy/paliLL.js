// 234. Palindrome Linked List
// Easy
// Topics
// premium lock icon
// Companies
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 

// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false
 

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let stack = []
    let temp = head
    while(temp!==null){
        stack.push(temp.val)
        temp = temp.next
    }
    let f = 0
    let l = stack.length-1
    while(f<l){
        if(stack[f]!==stack[l]){
            return false
        }
        f++
        l--
    }
    return true
    
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //find the mid
    //rev the mid
    //if not equal false else true
    if(head==null || head.next==null){
        return true
    }
    let fast = head
    let slow = head
    while(fast!==null && fast.next!==null){
        slow = slow.next
        fast = fast.next.next
    }

    let prev = null;
    let curr = slow;

    while (curr !== null) {
        let next = curr.next;

        curr.next = prev;

        prev = curr;
        curr = next;
    }

    let f = head
    let l = prev
    while(l!==null){
        if(f.val !== l.val){
            return false
        }
        f = f.next
        l = l.next
    }
    return true

};