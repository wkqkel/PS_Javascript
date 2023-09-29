/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const makeMap = (arr) => arr.reduce((acc,cur)=> {
        acc[cur] = (acc[cur] || 0 )+ 1
        return acc
    }, {});
    const map = makeMap(arr);
    const large =Object.entries(map).filter(([v1,v2])=> +v1 === +v2).at(-1);
    return large ? large[0] : -1
};