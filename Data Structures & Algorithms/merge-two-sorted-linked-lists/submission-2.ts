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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let p1 = list1
        let p2 = list2
        let p3 = null

        if(p1 === null) return p2
        else if(p2 === null) return p1

        if(p1.val < p2.val) {
            p3 = p1
            p1 = p1.next
            
        } else {
            p3 = p2
            p2 = p2.next
            
        }

        list1 = p3
        
        while(p1 !== null && p2 !== null) {
            if(p1.val < p2.val) {
                p3.next = p1
                p3 = p1
                p1 = p1.next
            } else {
                p3.next = p2
                p3 = p2
                p2 = p2.next
            }

        }

        if(p2 === null) {
            p3.next = p1
        }

        if(p1 === null) {
            p3.next = p2
        }
        
        return list1
    }
}
