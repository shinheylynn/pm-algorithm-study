// O(n) 메소드 사용
function search1(nums: number[], target: number): number {
  if (nums.includes(target)) return nums.indexOf(target)
  return -1
}

// O(log n) 이진 탐색
function search2(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (nums[mid] === target) return mid

      // 왼쪽 구간이 정렬된 경우
      if (nums[left] <= nums[mid]) {
          if (nums[left] <= target && target < nums[mid]) {
              right = mid - 1 // target이 왼쪽에 있음
          } else {
              left = mid + 1 // target이 오른쪽에 있음
          }
      } 
      // 오른쪽 구간이 정렬된 경우
      else {
          if (nums[mid] < target && target <= nums[right]) {
              left = mid + 1 // target이 오른쪽에 있음
          } else {
              right = mid - 1 // target이 왼쪽에 있음
          }
      }
  }

  return -1
}