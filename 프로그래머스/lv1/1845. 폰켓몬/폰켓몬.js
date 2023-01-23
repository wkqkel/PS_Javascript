function solution(nums) {
  // 문제해석
    
  return Math.min(new Set(nums).size, nums.length / 2)
}