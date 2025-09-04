class Solution {
  int searchInsert(List<int> nums, int target) {
    int low = 0;
    int high = nums.length - 1;

    while (low <= high) {
      int mid = low + (high - low) ~/ 2;

      int midValue = nums[mid];

      if (midValue == target) {
        return mid;
      } else if (midValue > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return low;
  }
}
