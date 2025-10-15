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

const toAddedNumber = (node: ListNode | null): number => {
  let currentNode = node;
  let sum = 0;

  while (currentNode !== null) {
    sum *= 10;
    sum += currentNode.val;
    currentNode = currentNode.next;
  }

  return sum;
};

const toLinkedList = (num: number): ListNode | null => {
  let init = new ListNode(num / 10);
  let number = num;

  while (number % 10 !== 0) {
    const current = num / 10;
    const next = num % 10;

    init.val = current;
    init.next = new ListNode(next);
    init = init.next;

    number = next;
  }

  return init;
};

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const listNode = new ListNode(0);
  let currnetNode = listNode;
  let carry = 0;

  let listNode1 = l1;
  let listNode2 = l2;

  while (listNode1 !== null || listNode2 !== null || carry > 0) {
    const num1 = listNode1 !== null ? listNode1.val : 0;
    const num2 = listNode2 !== null ? listNode2.val : 0;
    const sum = num1 + num2 + carry;

    carry = sum >= 10 ? 1 : 0;
    currnetNode.next = new ListNode(sum % 10);

    currnetNode = currnetNode.next;

    if (listNode1 !== null) {
      listNode1 = listNode1.next;
    }

    if (listNode2 !== null) {
      listNode2 = listNode2.next;
    }
  }

  return listNode.next;
}
