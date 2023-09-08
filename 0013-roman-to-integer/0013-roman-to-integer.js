/**
 * @param {string} s
 * @return {number}
 */
const MAP = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

const MAPED = {
    IV: MAP.V - MAP.I,
    IX: MAP.X - MAP.I,
    XL: MAP.L - MAP.X,
    XC: MAP.C - MAP.X,
    CD: MAP.D - MAP.C,
    CM: MAP.M - MAP.C,
}

var romanToInt = function (s) {
    let res = 0;
 
    s.replace(/IV|IX|XL|XC|CD|CM|I|V|X|L|C|D|M/gi, (v)=>{
        res += MAPED[v] || MAP[v]
        return ''
    })
    return res
};