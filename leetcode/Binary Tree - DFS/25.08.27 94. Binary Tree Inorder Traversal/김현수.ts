import { TreeNode } from "./class";

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
  const inorder = (root: TreeNode | null, res: number[] = []) => {
    if (!root) return res;
    inorder(root.left, res);
    res.push(root.val);
    inorder(root.right, res);

    return res;
  };

  const answer = inorder(root);
  return answer;
}
