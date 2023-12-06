/** 
1. 아이디어
- N개의 숫자를 정렬
- N개를 for 돌면서, 이진탐색
- 이진탐색 안에서 마지막에 데이터 찾으면 1출력, 아니면 0출력

2. 시간복잡도
- N개 입력값 정렬 = O(NlgN)
- M개를 N개 중에서 탐색 = O(M * lgN)
- 총합: O((N+M)lgN) > 가능

3. 자료구조
- N개 숫자: int[]
- M개 숫자: int[]

*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = +input[0];
const nums = input[1].split(' ').map(Number);
const m = +input[2];
const target_list = input[3].split(' ').map(Number);


nums.sort((a,b)=>a-b); // 정렬해야 이진탐색 가능

const res = []

function search(st, en, target) {
  if(st == en) {
    if (nums[st] === target){
      res.push(1);
    } else {
      res.push(0);
    }
    return;
  }

  const mid = Math.floor((st+en)/2);
  if(nums[mid] < target){
    search(mid+1, en, target)
  } else {
    search(st, mid, target)
  }
}

for(let each_target of target_list) {
  search(0, n-1, each_target);
}

console.log(res.join('\n'))