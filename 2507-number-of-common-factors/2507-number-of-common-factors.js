/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    const min =Math.min(a,b)
    let res =0;
    for(let i=1; i<= min; i++) {
        if(a%i===0 && b%i===0) {
            res+=1
        }
    }
    return res
};