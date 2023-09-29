/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const sorted = [...heights].sort((a,b)=>a-b);

    return heights.filter((v,i)=> v !== sorted[i]).length
};