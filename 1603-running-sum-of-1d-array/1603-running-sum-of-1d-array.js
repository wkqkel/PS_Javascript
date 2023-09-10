/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    const res = [];
    for(let i = 0; i<nums.length; i++){
        res.push(sum+nums[i]);
        sum += nums[i];
    }
    return res;
};