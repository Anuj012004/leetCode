// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
      // Step 1: Create a dummy node to start our merged list
    let dummy = new ListNode(-1); // Just a fake starting point
    let current = dummy; // This will move along and build the list

    // Step 2: While both lists have nodes
    while (list1 !== null && list2 !== null) {
        // Step 3: Compare current values
        if (list1.val < list2.val) {
            current.next = list1; // Attach list1 node
            list1 = list1.next;   // Move list1 forward
        } else {
            current.next = list2; // Attach list2 node
            list2 = list2.next;   // Move list2 forward
        }

        // Step 4: Move the builder (current)
        current = current.next;
    }

    // Step 5: If any nodes are left in either list, attach them
    current.next = list1 !== null ? list1 : list2;

    // Step 6: Return the real head (skip dummy)
    return dummy.next;
};