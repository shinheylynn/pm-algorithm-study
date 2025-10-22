/**
Do not return anything, modify nums1 in-place instead.
 */

/**
 * Topics: 
 * - Array
 * - Two Pointers
 * - Sorting
 */

/** 첫 시도: 
포인터를 nums1, nums2 둘 다 각자 0번 째 인덱스부터 할당해서 접근함
그런데 새 배열을 만들지 말고 원본 배열 nums1을 수정하는 방식으로 풀으라고 했는데, 앞에서부터 포인터를 부여하면 값이 덮어씌워지는 문제가 있음
그래서 뒤에서부터 풀어야 하나보다 하고 접근 방식을 수정함
*/

/** 두 번째 시도: 
nums1 배열의 후반부가 0인 이유는 뒤에서부터 큰 값을 채워 넣기 위해서라고 판단
각 포인터를 0이 아닌 원소 끝 인덱스(m, n)부터 할당 시작해서 하나씩 줄여나감 
두 값을 비교해서 더 큰 값을 nums1 배열의 마지막 인덱스(nums1.length - 1)부터 하나씩 앞으로 값을 덮어씌우는 방식으로 접근
= reverse two pointer 형태
*/

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1 // nums1의 0이 아닌 원소 끝 인덱스
  let p2 = n - 1 // nums2의 끝 인덱스
  let p = nums1.length - 1 // nums1의 총 끝 인덱스

  // 두 배열의 원소 값을 비교하고, 더 큰 값을 뒤에서부터 채우기 위해 반복
  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1]! > nums2[p2]!) {
      nums1[p]! = nums1[p1]! // nums1[p1] 값이 기존 원소 값인 0을 덮어씀
      p1-- // 비교 끝, nums1 포인터 줄이기
    } else {
      nums1[p]! = nums2[p2]! // nums2[p2] 값이 기존 원소 값인 0을 덮어씀
      p2-- // 비교 끝, nums2 포인터 줄이기
    }

    p-- // 뭐가 됐든 덮어쓰였으니 nums1의 최종 포인터 줄이기
  }
}