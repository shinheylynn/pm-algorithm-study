// 가장 먼저 생각난 방법.
// function majorityElement(nums: number[]): number {
//     const map = nums.reduce((map, num) => {
//         if (!map.has(num)) {
//             map.set(num, 0);
//         }

//         map.set(num, map.get(num) + 1);
//         return map;
//     }, new Map());

//     return Array.from(map).sort((a, b) => b[1] - a[1])[0][0];
// };

// sort를 없앨 수 없을까?
function majorityElement(nums: number[]): number {
  const { answer } = nums.reduce(
    (acc, num) => {
      const currentNumCount = acc.map.get(num) || 0;
      acc.map.set(num, currentNumCount + 1);

      if (acc.majority < currentNumCount + 1) {
        acc.majority = currentNumCount + 1;
        acc.answer = num;
      }

      return acc;
    },
    {
      map: new Map(),
      majority: 0,
      answer: 0,
    }
  );

  return answer;
}
