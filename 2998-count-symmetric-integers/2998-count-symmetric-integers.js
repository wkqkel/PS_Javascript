/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    const res = []
    for(let i=low; i<=high;i++){
        const arr = [...String(i)];
        if(arr.length % 2 === 1) {
            continue;
        }
        const half1 = arr.slice(0, arr.length / 2);
        const half2 = arr.slice(arr.length / 2);
        const sum = (arr) => arr.reduce((acc,cur)=> acc + +cur,0);
        if(sum(half1) === sum(half2)) {
            res.push(i)
        }
    }
    return res.length
};