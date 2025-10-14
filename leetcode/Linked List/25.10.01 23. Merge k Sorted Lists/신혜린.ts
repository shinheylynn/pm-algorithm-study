class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

// 어렵다.....
// 해답 보고 참고하면서 풀이

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const heap: ListNode[] = []

  // 1. 초기 heap에 각 리스트의 head 넣기
  for (const node of lists) {
      if (node) heap.push(node)
  }

  // 2. heap을 값 기준으로 정렬 (min-heap처럼 사용)
  heap.sort((a, b) => a.val - b.val)

  const dummy = new ListNode(0)
  let curr = dummy

  // 3. heap이 빌 때까지 반복
  while (heap.length > 0) {
      // 가장 작은 노드 꺼내기
      const node = heap.shift()!
      curr.next = node
      curr = curr.next

      // 다음 노드가 있으면 heap에 추가
      if (node.next) {
          heap.push(node.next)
          heap.sort((a, b) => a.val - b.val) // 다시 정렬
      }
  }

  return dummy.next
}