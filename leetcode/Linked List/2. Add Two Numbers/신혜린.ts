class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const sum = reverseList(l1) + reverseList(l2)
  
  let node = new ListNode(sum % 10)
  let current = node

  console.log('node', node)
  console.log('current', current)
  
  return node
}

const reverseList = (node: ListNode | null): number => {
  let number = 0
  let current = node
  let multiplier = 1

  while (current) {
    number += current.val * multiplier
    multiplier *= 10
    current = current.next
  }

  return number
}

// 테스트 케이스
// l1 = [2,4,3] (숫자 342를 나타냄)
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))

// l2 = [5,6,4] (숫자 465를 나타냄)
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

console.log('=== 테스트 실행 ===')
console.log('l1:', l1)
console.log('l2:', l2)
console.log('\n=== addTwoNumbers 실행 결과 ===')
const result = addTwoNumbers(l1, l2)
console.log('\nresult:', result)