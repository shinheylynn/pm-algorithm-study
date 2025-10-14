class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

// 처음에는 while 문 속에서 list head > next 순서로 가면서 1, 10, 100씩 곱해서 총합을 구하는 방식으로 풀려고 했음
// 근데 그럼 다시 또 number 를 ListNode 로 변환해야 하고 그렇게 되면 메모리 낭비가 심해짐
// 그래서 메모리 낭비 없이 풀 수 있는 방법을 찾다가 carry 값을 사용하는 방법을 찾음

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0)
  let curr = dummy
  let carry = 0 // carry = 한 자리의 합이 10 이상이 되면, 다음 자리로 넘겨야 하는 값(1) 을 저장하는 용도

  while (l1 !== null || l2 !== null || carry > 0) {
    const val1 = l1 !== null ? l1.val : 0
    const val2 = l2 !== null ? l2.val : 0

    const sum = val1 + val2 + carry
    carry = sum >= 10 ? 1 : 0 // sum이 10 이상이면 다음 자리로 1을 넘겨야 하므로 carry를 1로 설정
    curr.next = new ListNode(sum % 10) // 다음 자릿수를 next로 저장하기 위해 10으로 나눈 나머지를 저장

    curr = curr.next
    if (l1) l1 = l1.next // l1이 있으면 l1을 다음 노드로 이동
    if (l2) l2 = l2.next // l2이 있으면 l2을 다음 노드로 이동
  }

  return dummy.next
}