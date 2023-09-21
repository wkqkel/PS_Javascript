/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    const nums = String(num).split('').sort((a,b)=>a-b);
    let odd =''
    let even = ''
    for(let i=0; i<nums.length; i++){
        if(i%2===0) {
            even += nums[i]
        } else {
            odd += nums[i]
        }
    }
    return +even + +odd
};