/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
       if(head === null) return head

       let prev = head
       let current = prev.next
       let prev2 = null

       while(current != null) {
        prev2 = current.next
        current.next = prev

        if(prev === head) prev.next = null
        prev = current
        current = prev2
       } 

       return prev
    }
}
