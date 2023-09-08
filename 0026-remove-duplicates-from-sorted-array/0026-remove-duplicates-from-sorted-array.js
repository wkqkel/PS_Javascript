/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   for(let i = 0; i< nums.length; i++){
      if(nums.slice(0,i).includes(nums[i])){
         nums.splice(i, 1)
         i--
      }
   }   
};