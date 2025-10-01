/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class ListNode {
  int val;
  ListNode? next;
  ListNode([this.val = 0, this.next]);
}

class Solution {
  ListNode? addTwoNumbers(ListNode? l1, ListNode? l2) {
    int carry = 0;

    return recursion(l1, l2, carry);
  }

  ListNode? recursion(ListNode? l1, ListNode? l2, int carry) {
    if (l1 == null && l2 == null && carry == 0) {
      return null;
    }

    int val1 = l1 == null ? 0 : l1.val;
    int val2 = l2 == null ? 0 : l2.val;

    int sum = val1 + val2 + carry;
    carry = (sum ~/ 10).toInt();

    ListNode ans = new ListNode(sum % 10, recursion(l1?.next, l2?.next, carry));

    return ans;
  }
}
