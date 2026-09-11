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
        while(p2 !== null) {
            if(p2.next === p1) return true
            p2 = p2.next
            counter += 1
            if(counter % 2 === 0) p1 = p1.next
        }

        return false
    }
}
