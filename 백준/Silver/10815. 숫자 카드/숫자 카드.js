/** 
1. 아이디어
- 1. 2중포문
  - 시간복잡도: n * m =  5 * 1e5 * 5 * 1e5 = 25 * 1e10 = 250000000000 >> 2억 이상 불가능
- 2. 2분탐색
  - 정렬 NlgN
  - N * 이분탐색 lgN
  - 총: 2 * NlgN = 2 * 5 * 1e5 * lg(1e5) = 1e6 * lg(2^10^3) = 30 * 1e6 = 30000000 << 2억이하
- 3. 저장이용
- memory객체를 만들어서 arr1에 대해 저장
- arr2돌면서 memory에 있으면 0반환 아니면 1
- 시간복잡도: n + n = 2n = 1e6 젤좋음


*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');


const [n,m] = [input[0], input[2]];

const arr1 = input[1].split(' ').map(Number);
const arr2 = input[3].split(' ').map(Number);

// 방법 1
arr1.sort((a,b)=>a-b);

let res = '';

function search(st,en,target){
  if(st === en) {
    if(arr1[st] === target) {
      return res += '1 '
    }
    return res += '0 '
  }

  const mid = Math.floor((st+en)/2);
  if(arr1[mid] < target) {
     search(mid+1,en,target);
  } else {
    search(st,mid,target);
  }
}

for(let each of arr2) {
  search(0, n-1, each)
}

console.log(res)