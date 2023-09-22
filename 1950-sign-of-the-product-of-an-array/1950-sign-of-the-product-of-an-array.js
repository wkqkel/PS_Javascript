/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    const values = nums.reduce((acc,cur)=> acc*cur,1);
    if(values > 0) return 1;
    if(values < 0) return -1
    return 0
};