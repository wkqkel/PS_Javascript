/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return [...nums,target].sort((a,b)=>a-b).findIndex(v => v ===target)
};