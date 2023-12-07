/** 
1. 아이디어
- 배열 정렬한뒤 lt 0, rt arr[0]으로 잡은뒤
- 랜선갯수를 구함
- 구한 랜선갯수가 k보다 크거나 같으면
  - 결과값보다 현재 길이가 크면 갱신
  - lt를 늘림
- 구한 랜선갯수가 k보다 작으면
  - rt를 늘림

2. 시간복잡도
- 정렬: klogn
- 랜선갯수구하기k*이분탐색lgN 
- 총 2KlgN = 2 * 1e5 * lg(1e6) = 2 * 1e5 * lg(2^10^3) = 2 * 1e5 * 30 = 60 * 1e5 << 2억이하 => 통과

3. 자료구조

*/
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n,k] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number);

arr.sort((a,b) => a-b);

const [min,max] = [1,arr[n-1]];

let res = 0;

function search(st, en, target) {
  const mid = Math.floor((st+en) / 2);
  const sum = arr.reduce((acc, cur) => acc + Math.floor(cur /mid), 0);

  if(st > en) return;

  if(sum >= k) {
    if(mid > res) res = mid;
    search(mid + 1, en, target);
  } else {
    search(st, mid -1, target)
  }
}

search(min, max, k);

console.log(res);