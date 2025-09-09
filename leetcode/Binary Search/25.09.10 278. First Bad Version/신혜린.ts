// 첫 시도
var solution1 = function(isBadVersion: any) {
  return function(n: number): number {
      let min = 0
      let max = n

      while (min < max) {
          const mid = Math.floor((min + max) / 2)
          if (isBadVersion(mid)) {
              max = mid
          } else {
              min = mid + 1
          }
      }
      return max
  };
};


// 현수님 따라서 let 지워보기
var solution2 = function(isBadVersion: any) {
  const func = function(n: number, min = 1, max = n): number {
    if (min === max) return min

    const mid = Math.floor((min + max) / 2)
    if (isBadVersion(mid)) {
        return func(n, min, mid)
    }
    return func(n, mid + 1, max)
  }
  return func
}