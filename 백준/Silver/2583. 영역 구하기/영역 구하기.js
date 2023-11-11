/** 
1. 아이디어
- 문제와 다르게, 사각형 하나를 0,0을 봄
- 인풋을 받아서 [x1,y1, y1,y2][]를 만듬.
- for문안에 2중 포문 돌리면서 x1 ~ x2 y1~y2에 속하는 배열을 다 만듬.
- 만든 배열 for문 돌리며, 맵에서 색칠함.

- 맵의 2중포문 시작
- n= 0 초기화 dfs 시작
- 4방향 탐색하면서 방문했거나 색칠하지않으면
- n++ 방문처리 && dfs(nx, ny)
- n 배열에 넣기
- 오름차순으로 sort후 출력

2. 시간복잡도
- 100 * 100 * 100 => 1000000
- O(V+E)
- V: 100 * 100
- E = 4V : 40000
- 50000

3. 자료구조
- visited = bool[][]

*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [M,N,K] = input[0].split(' ').map(Number);
const retengles = input.slice(1).map(v=> v.split(' ').map(Number))

const colored = []
for(let [x1,y1,x2,y2] of retengles) {
  // 주의! 이차원배열의 바깥쪽이 for문 바깥쪽
  for(let i=y1; i<y2; i++) {
    for(let j=x1; j<x2;j++){
      colored.push([i,j])
    }
  }
}

let map = Array.from({length: M}, ()=> Array.from({length:N},()=>0))

for(let [x,y] of colored) {
  map[x][y] = 1;
}

const visited = Array.from({length: M}, ()=> Array.from({length:N},()=>false));

const res = [];
let n = 0;

const dx = [0,0,1,-1];
const dy = [1,-1,0,0];
function dfs(x,y){
  n++;
  visited[x][y] = true;
  
  for(let i=0;i<4;i++){
    const nx = x + dx[i];
    const ny = y + dy[i];
    if(0<=nx&&nx<M && 0<=ny&&ny<N){
      if(map[nx][ny] === 0 && visited[nx][ny] === false) {
        dfs(nx,ny)
      }
    }
  }
}

for(let i = 0; i< M;i++){
  for(let j =0; j<N;j++){
    if(visited[i][j] === false && map[i][j] === 0) {
      n = 0;
      dfs(i,j)
      res.push(n)
    }
  }
}

console.log(res.length)
console.log(res.sort((a,b)=>a-b).join(' '))