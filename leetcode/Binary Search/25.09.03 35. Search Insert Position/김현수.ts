function searchInsert(
  nums: number[],
  target: number,
  startIndex = 0,
  lastIndex = nums.length - 1
): number {
  if (startIndex > lastIndex) {
    return startIndex;
  }

  const middleIndex = Math.floor((startIndex + lastIndex) / 2);

  const middleIndexElement = nums[middleIndex];

  if (middleIndexElement === target) {
    return middleIndex;
  }

  if (middleIndexElement < target) {
    return searchInsert(nums, target, middleIndex + 1, lastIndex);
  }

  return searchInsert(nums, target, startIndex, middleIndex - 1);
}
