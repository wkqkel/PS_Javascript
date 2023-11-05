/** 
1. 아이디어
- 2중for문 돌면서
- origin 0의갯수++
- 1인것 다 큐에 넣음
- while 돌면서 큐에 있으면
- res++
- for문 돌면서 큐에 있는 것 다 빼면서 4방향 탐색 후
- 0이면 1로하고 없앤 0의갯수--, q에 그 좌표 넣음.
- origin 0의갯수 0이면 0 리턴
- 비교한 값이 0이면 res리턴 아니면 -1 리턴

2. 시간복잡도
- BFS O(V+E)
- 1000 * 1000 * 5 = 500_000 < 2억

3. 자료구조
- 0의 갯수 측정
- res: 도는 횟수
- 큐: [int,int][]
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [M,N] = input[0].split(' ').map(Number);
const map = input.slice(1).map(v=>v.split(' ').map(Number));

let originZero = removedZero = 0;
let res  = 0

let q = [];

for(let i = 0; i<N;i++){
  for(let j = 0; j<M;j++) {
    if(map[i][j]===0) originZero++;
    if(map[i][j]===1) q.push([i,j])
  }
}

const dx = [0,0,1,-1]
const dy = [1,-1,0,0]

while(q.length) {
  res++
  const temp = []
  for(let i = 0; i < q.length; i++) {
    const [x,y] = q[i];
    for(let k=0;k<4;k++){
      const nx = x + dx[k]
      const ny = y + dy[k]

      if(0<=nx && nx<N && 0 <= ny && ny < M && map[nx][ny] === 0) {
        map[nx][ny] = 1;
        removedZero++;
        temp.push([nx,ny])
      }
    }
  }
  q = temp
}

if(originZero === 0) {
  console.log(0)
  return 
};
if(originZero - removedZero === 0) {
  console.log(res - 1)
  return 
}
console.log(-1)