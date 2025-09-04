/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  const func = (n: number, min = 1, max = n): number => {
    if (min > max) return min;
    const mid = Math.floor((min + max) / 2);

    if (isBadVersion(mid)) {
      return func(n, min, mid - 1);
    }

    return func(n, mid + 1, max);
  };

  return func;
};
