/** 
1. 아이디어
- map 만들기
- dfs 0,0에서 시작
- 네방향 탐색하면서 
- !visited이면 n++ && dfs
- dfs 밑에는 visited 해제 && max 비교

2. 시간복잡도
- O(V+E)
- V: 20 * 20 = 400
- E: 4V = 4 * 400 = 1600
- 2000 < 2억이하 >> 가능

3. 자료구조
- visited: bool[]

*/
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [r,c] = input[0].split(' ').map(Number);
const map = input.slice(1).map(v => v.split(''));

const dx = [0,0,1,-1];
const dy = [1,-1,0,0];

const visited = Array.from({length:c}, () => false);

let n = 0;
let res = 0;
function dfs(x,y) {
  const v = map[x][y] 

  n++;
  visited[v] = true;

  res = Math.max(n, res)
  
  for(let i=0; i<4;i++){
    const nx = x + dx[i];
    const ny = y + dy[i];

    if(0<=nx && nx < r && 0<=ny && ny < c){
      const v = map[nx][ny]
      if(!visited[v]){
        dfs(nx,ny)
      }
    }
  }
  
  n--
  visited[v] = false;
}

dfs(0,0)

console.log(res)