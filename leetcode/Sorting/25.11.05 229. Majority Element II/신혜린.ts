/**
 * Topics:
 * - Array
 * - Hash Table
 * - Sorting
 */

// 1차: HashMap 사용
function containsDuplicate1(nums: number[]): boolean {
    const count: Record<number, number> = {}

    for (const num of nums) {
      count[num] = (count[num] || 0) + 1

      if (count[num] > 1) {
        return true
      }
    }

    return false
};

// 2차: Set 사용
function containsDuplicate2(nums: number[]): boolean {
  return new Set(nums).size !== nums.length
};