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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let p1 = head
        let p2 = head  
        let counter = 0 
        while(p2 !== null && p2.next !== null) {
            p2 = p2.next.next
            p1 = p1.next
            if(p1 === p2) return true
        }

        return false
    }
}
