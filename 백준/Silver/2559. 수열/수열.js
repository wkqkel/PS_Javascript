/**
1. 아이디어
- 투포인터 활용
- for문으로 처음에 k개값을 저장
- 다음인덱스 더해주고, 이전인덱스 빼줌
- 이떄마다 최대값 갱신

2. 시간복잡도
- O(N) = 1e5 > 가능

3. 자료구조
- 각 숫자들 N개 저장 배열: int[]
 - 숫자들 최대 100이므로 int사용 가능
- k개의 값을 저장하는 변수 : int
 - 최대 : K * 100 = 1e5 * 100 = 1e7 > INT가능
- 최대값 : int
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n,k] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

// K개를 더해주기
let each = 0;
for (let i = 0; i <k; i++){
  each += nums[i]
}
let max = each;

// 다음 인덱스를 더해주고 이전 인덱스를 빼주기
for(let i = k; i<n; i++){
  each += nums[i] - nums[i-k];
  max = Math.max(each, max);
}

console.log(max);