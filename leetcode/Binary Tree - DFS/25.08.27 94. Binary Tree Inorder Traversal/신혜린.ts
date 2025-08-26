function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return []

  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};

// 중위운행법
// 회귀를 통한 정렬
// 1.	왼쪽 끝까지 내려감 -> 거기서 left, root, right 순서로 결과를 만들고
// 2.	그 결과를 부모로 한 단계 올라오며 같은 규칙으로 합침
// 3.	오른쪽도 동일하게 처리
// 4.	최종적으로 [왼쪽 결과] + [root] + [오른쪽 결과]를 루트에서 합쳐 하나의 배열로 만든다.

// inorderTraversal(4.left), 4, inorderTraversal(4.right)

// inorderTranversal(4.left)
// = inorderTraversal(2.left), 2, inorderTraversal(2.right)
// ㄴ inorderTraversal(2.left) = inorderTraversal(1.left), 1, inorderTraversal(1.right) = [], 1, []
// ㄴ inorderTraversal(2.right) = inorderTraversal(3.left), 3, inorderTravnersal(3.right) = [], 3, []
//    = [], 1, [], 2, [], 3, []

// inorderTranversal(4.right)
// = inorderTraversal(6.left), 6, inorderTraversal(6.right)
// ㄴ inorderTraversal(6.left) = inorderTraversal(5.left), 5, inorderTraversal(5.right) = [], 5, []
// ㄴ inorderTraversal(6.right) = inorderTraversal(7.left), 7, inorderTravnersal(7.right) = [], 7, []
//    = [], 5, [], 6, [], 7, []

// inorderTraversal(4.left), 4, inorderTraversal(4.right)
// = [], 1, [], 2, [], 3, [], 4, [], 5, [], 6, [], 7, []