/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const getMinimumValueIndex = (lists: Array<ListNode | null>): number => {
  const { index } = lists.reduce(
    (acc, cur, index) => {
      if (!cur) return acc;

      if (acc.value > cur.val) {
        acc.value = cur.val;
        acc.index = index;
      }

      return acc;
    },
    {
      value: Infinity,
      index: 0,
    }
  );

  return index;
};

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const answer = new ListNode(0);
  let currentNode = answer;

  while (lists.some((node) => node)) {
    const minimumValueIndex = getMinimumValueIndex(lists);
    currentNode.next = new ListNode(lists[minimumValueIndex]!.val);
    lists[minimumValueIndex] = lists[minimumValueIndex]!.next;
    currentNode = currentNode.next;
  }

  return answer.next;
}
