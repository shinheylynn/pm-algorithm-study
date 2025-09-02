// 시간 복잡도 비교: https://assets.leetcode.com/static_assets/posts/1EYkSkQaoduFBhpCVx7nyEA.gif

// 시간 복잡도 O(n) - nums 배열이 길어질수록 시간 복잡도가 증가
function sequentialSearch(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target || nums[i] > target) return i
  }
  return nums.length
}

// 이진 탐색 O(log n)
// 이진 탐색은 정렬된 배열에서만 사용할 수 있음
// 데이터를 반으로 나누어서 비교하고 찾는 방식
function binarySearch(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (nums[mid] === target) {
          return mid
      } else if (nums[mid] < target) {
          left = mid + 1
      } else {
          right = mid - 1
      }
  }

  return left 
}
