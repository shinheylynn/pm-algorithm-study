function majorityElement(nums: number[]): number[] {
  const map = nums.reduce((map, num) => {
    if (!map.has(num)) {
      map.set(num, 0);
    }

    return map.set(num, map.get(num) + 1);
  }, new Map());

  return Array.from(map)
    .filter(([, count]) => count > nums.length / 3)
    .map(([num]) => num);
}
