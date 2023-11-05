/** 
1. 아이디어
- q(N, L = 0)으로 시작
- while문 돌면서
- x === K 이면 min,L 최소값 비교 
- else
- for[x-1,x+1,x*2]문 돌면서
- nx가 0보다 크면서 k보다 같거나!!(중요) 작으면 방문X이면 
- 방문처리 + q에 (nx, L+1) 푸쉬

2. 시간복잡도 
- BFS: O(V+E)
- V는 최대 1000,000 > 이게 맞나??
- E = 3V
-> 40만 < 2억 >> 가능

3. 자료구조
- q: [int,int][]
- visited: bool[]
*/

const fs = require('fs');
const [N,K] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

const q = [[N,0]];
const visited = new Array(100_002).fill(false);
visited[N] = true;
let min = Number.MAX_SAFE_INTEGER;

while(q.length){
  const [x,L] = q.shift();
  if(x === K) {
    min = Math.min(min,L);
  }
  for(let nx of [x-1,x+1,x*2]){
    if(visited[nx] === false) {
      visited[nx] = true;
      q.push([nx,L+1]);
    }
  }
}

console.log(min)
