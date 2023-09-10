/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    const res = [];
    for(let num of nums){
        sum += num;
        res.push(sum);
    }
    return res;
};