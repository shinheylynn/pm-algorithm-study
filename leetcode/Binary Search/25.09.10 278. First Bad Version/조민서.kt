// 첫 풀이 - 200ms
class Solution: VersionControl() {
    override fun firstBadVersion(n: Int) : Int {
        var start:Int = 1
        var end:Int = n

        while (start <= end) {
          var mid = start + (end - start) / 2
          var isBadVersion = isBadVersion(mid)

          if(isBadVersion) {
            end = mid - 1
          } else {
            start = mid + 1
          }
        }

        return start
	}
}

// 좀 더 줄일 수 있을까 해봤는데 별 차이 없음
class Solution: VersionControl() {
    override fun firstBadVersion(n: Int) : Int {
        var start:Int = 1
        var end:Int = n

        while (start < end) {
            val mid = start + (end - start) / 2
            
            if (isBadVersion(mid)) {
                end = mid
            } else {
                start = mid + 1
            }
        }

        return start
	}
}