/** 
1. 아이디어
- 배열이 될 수 있는 순서를 모두 탐색 후 답을 계산해서 최댓값 출력
- 방문을 체크해서 n * (n-1) ... 1 재귀적으로 하고 L === n일때 최댓값 갱신

2. 시간복잡도
- n! < N은 최대 8이하이므로 2억이하 >> 가능

3. 변수
- visited: 방문체크 bool[]

*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const n = +input[0];
const arr = input[1].split(' ').map(Number);

const visited = [];
let max = 0;

function recur(L, cur){
  if(L === n) {
    let res = 0
    for(let i =0; i<cur.length-1; i++){
      res += Math.abs(cur[i] - cur[i+1])
    }
    if(max < res) max = res;
    return
  }

  for(let i = 0; i < n; i++){
    if(visited[i]) continue;
    visited[i] = true;
    recur(L + 1, [...cur, arr[i]]);
    visited[i] = false;
  }
}

recur(0, [])
console.log(max)

