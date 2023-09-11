/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
   const sum = (arr) => arr.reduce((acc,cur)=>acc+cur);
   return Math.max(...accounts.map(sum))
};