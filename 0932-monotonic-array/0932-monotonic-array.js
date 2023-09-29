/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    const sliced = nums.slice(0, -1);
    const isCond1 = (v,i) => i < i+1 && nums[i] <= nums[i+1];
    const isCond2 = (v,i) => i < i+1 && nums[i] >= nums[i+1];

    return sliced.every(isCond1) || sliced.every(isCond2);
};