class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// 1차 시도 - BFS 너비 우선 탐색
function maxDepth1(root: TreeNode | null): number {
  if (root === null) return 0

  const queue: TreeNode[] = []
  queue.push(root)
  let depth = 0

  // 큐가 빌 때까지 반복 (아래에서 shift 하고 있어서 비어버리면 종료)
  while (queue.length > 0) {
    depth++

    // 객체, 배열은 참조값(메모리 주소)이 전달되므로 깊은 복사해서 원본과 독립된 고정값(breadth)을 사용해야 함 
    // (아래에서 shift, push 하고 있어서 원본 값이 변경되어 버림)
    const breadth = queue.length 

    // 한 레벨에 있는 노드들을 모두 탐색하기 위해 breadth만큼 반복
    for (let i = 0; i < breadth; i++) {
        const node = queue.shift() // 0번째 요소를 기준 노드로 설정
        if (node!.left) {
            queue.push(node!.left)
        }
        if (node!.right) {
            queue.push(node!.right)
        }
    }
  }

  return depth
}

// ------------------------------------------------------------

// 2차 시도 - DFS 깊이 우선 탐색
function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0

  const leftDepth = maxDepth(root.left) // 왼쪽 서브트리의 최대 깊이
  const rightDepth = maxDepth(root.right) // 오른쪽 서브트리의 최대 깊이

  // 왼쪽으로 끝까지 내려갔다가 돌아오면서 값 계산 -> 오른쪽으로 끝까지 내려갔다가 돌아오면서 값 계산
  // 둘 중 더 큰 값을 선택하고 루트 노드 1개를 더해서 반환
  return Math.max(leftDepth, rightDepth) + 1
}