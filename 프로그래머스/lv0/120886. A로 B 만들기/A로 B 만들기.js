function solution(before, after) {
//     const b = before.split('').sort().join('');
//     const a = after.split('').sort().join('');
    
//     return b=== a? 1 : 0;
    return +(before.split('').sort().join('') === after.split('').sort().join(''))
}