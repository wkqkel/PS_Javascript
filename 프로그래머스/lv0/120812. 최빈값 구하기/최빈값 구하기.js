// const arrayToMap = (array) => {
//     const map = new Map()
//     for (const value of array) {
//       const newValue = map.has(value) ? map.get(value) + 1 : 1
//       map.set(value, newValue)
//     }
//     return map
// }

// const getModeWithMap = (map) =>{
//     let max =0
//     let answer =0

//     for (const  [key, value] of map) {
//         if(value > max) {
//             max = value;
//             answer = key
//         }
//         if(value===max && key !== answer) {
//           answer = -1
//         }
//     }
//     return answer
// }

// function solution(array) {
//     return getModeWithMap(arrayToMap(array))
// }


function solution(array) {
    let m = new Map();
    for (let n of array) m.set(n, (m.get(n) || 0)+1);
    m = [...m].sort((a,b)=>b[1]-a[1]);
    
    console.log([...m])
    return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}

