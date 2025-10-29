/**
 * Topics: 
 * - Array
 * - Sorting
 * - Hash Table
 * - Divide and Conquer
 * - Counting
 */

/** Constraints:
 * n == nums.length
 * 1 <= n <= 5 * 104
 * -109 <= nums[i] <= 109
*/

function majorityElement(nums: number[]): number | undefined {
  const count: Record<number, number> = {}
  const half = Math.floor(nums.length / 2)

  for (const num of nums) {
    count[num] = (count[num] || 0) + 1 // 각 숫자의 등장 횟수를 계산

    if (count[num] > half) { // 등장 횟수가 반 이상이면 해당 숫자를 바로 반환
      return num
    }
  }
}

majorityElement([3,2,3]) // 3
majorityElement([2,2,1,1,1,2,2]) // 2


/**
 * Divide and Conquer 라고 해서 거창한 건 아니었다...
 * 등장 횟수가 majority 이상인 숫자를 구해야 하기 때문에 반으로 나눈 것 뿐
 */