function twoSum(nums: number[], target: number): number[] {
  const indices: number[] = [];

  // key: nums[i]
  // value: i
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      indices.push(map.get(target - nums[i])!);
      indices.push(i);
      return indices;
    }
    map.set(nums[i], i);
  }

  return indices;
}
