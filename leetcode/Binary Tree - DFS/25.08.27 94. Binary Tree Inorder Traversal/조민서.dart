class TreeNode {
  int val;
  TreeNode? left;
  TreeNode? right;
  TreeNode([this.val = 0, this.left, this.right]);
}

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   int val;
 *   TreeNode? left;
 *   TreeNode? right;
 *   TreeNode([this.val = 0, this.left, this.right]);
 * }
 */
class Solution {
  List<int> inorderTraversal(TreeNode? root) {
    if (root == null) return [];

    List<int> result = [];

    search(root.left, result);
    result.add(root.val);
    search(root.right, result);

    return result;
  }

  void search(TreeNode? node, List<int> result) {
    if (node == null) return;

    search(node.left, result);
    result.add(node.val);
    search(node.right, result);
  }
}
