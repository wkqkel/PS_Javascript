function solution(s) {
    // 내 방법 
    // s를 반복문 돌면서 이중배열로 만든 다음,
    // map객체에 값 당 갯수 담고,(처음에는 객체를 이용=>시간초과)
    // 내림차순 정렬해서 키를 반환
//     const arr = [...s].reduce((acc,cur)=> {
//         if(!isNaN(+cur)) {
//           acc[acc.length - 1] += cur
//         }
//          if(cur===','){
//             acc[acc.length] = ''
//         }
//         return acc
//     },[''])
    
//     const map = arr.reduce((acc, v) => {
//       acc.set(v, (acc.get(v) || 0) + 1);
//       return acc;
//     }, new Map());
    
//     return [...map].sort((a,b)=> b[1] - a[1]).map(v=> +v[0]);
    
    // 방법2
    // JSON.parse와 replace를 이용해 만들고,
    // 배열의 length가 적을수록 올바른 순서로 존재
    // 정렬 후 flat해주고 set으로 중복을 없애준 것을 반환
     return [...new Set(JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
                .sort((a,b)=> a.length -b.length).flat())]
}