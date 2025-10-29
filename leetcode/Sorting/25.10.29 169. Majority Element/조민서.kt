// 풀이 1
// 그냥 정렬로만 풀어보기
// 시간복잡도 O(nlogn), 공간복잡도 O(1)
// 자바, 코틀린의 Arrays.sort는 Dual Pivot Quick Sort를 사용하고 있음
class Solution1 {
  fun majorityElement(nums: IntArray): Int {
    Arrays.sort(nums)

    val n : Int = nums.size

    return nums[n / 2]
  }
}

// 풀이 2
// HashMap을 사용해서 풀어보기
// 시간복잡도 O(n), 공간복잡도 O(n)
class Solution2 {
  fun majorityElement(nums: IntArray): Int {
    val map : HashMap<Int, Int> = HashMap()
    var n : Int = nums.size

    for (num in nums) {
      map.put(num, map.getOrDefault(num, 0) + 1)
    }

    n = n / 2
    for (entry in map.entries) {
      if (entry.value > n) {
        return entry.key
      }
    }

    return 0
  }
}