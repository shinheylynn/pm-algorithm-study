// 풀이 1: HashMap을 사용해서 풀어보기
// 시간복잡도 O(n), 공간복잡도 O(n)
class Solution {
    fun majorityElement(nums: IntArray): List<Int> {
      val map : HashMap<Int, Int> = HashMap()
      var n : Int = nums.size
      val result = mutableListOf<Int>()

      for (num in nums) {
        map.put(num, map.getOrDefault(num, 0) + 1)
      }

      n = n / 3
      for (entry in map.entries) {
        if (entry.value > n) {
          result.add(entry.key)
        }
      }

      return result
    }
}

// 풀이 2: Boyer-Moore Majority Vote 알고리즘
// 시간복잡도 O(n), 공간복잡도 O(1)
class Solution2 {
    fun majorityElement(nums: IntArray): List<Int> {
        var candidate1: Int? = null
        var candidate2: Int? = null
        var count1 = 0
        var count2 = 0
        
        // 1단계: 후보 찾기
        for (num in nums) {
            when {
                candidate1 != null && candidate1 == num -> count1++
                candidate2 != null && candidate2 == num -> count2++
                count1 == 0 -> {
                    candidate1 = num
                    count1 = 1
                }
                count2 == 0 -> {
                    candidate2 = num
                    count2 = 1
                }
                else -> {
                    count1--
                    count2--
                }
            }
        }
        
        // 2단계: 실제 빈도 확인
        count1 = 0
        count2 = 0
        val threshold = nums.size / 3
        
        for (num in nums) {
            if (candidate1 != null && num == candidate1) count1++
            if (candidate2 != null && num == candidate2) count2++
        }
        
        val result = mutableListOf<Int>()
        if (count1 > threshold) result.add(candidate1!!)
        if (count2 > threshold && candidate2 != candidate1) result.add(candidate2!!)
        
        return result
    }
}