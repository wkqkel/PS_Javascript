/** 
1. 아이디어
- 1)dfs : 벽 세우기 
- 1-1)count 3일 때 bfs
- 2) bfs : 확산(이때 원본복사한 map 넘겨주기)
- 2-1) safeZone++ 과 2인 곳 큐에 넣기
- 2-2) while문 돌면서 4방향 탐색
- 2-3) inArea && 0 이면 2로 바꾸고, safeZone--, 큐에푸쉬
- 3) 끝나면 safeZone과 결과값 중 큰값 res에 저장
- 4) res 출력

2. 시간복잡도
- dfs: 64 * 64 *64 
- bfs: 64 * 5
==> 64^4 * 5 = 83886080 << 2억이하

3. 자료구조
- map: int[][]
- visited: boolean[][]

*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n,m] = input[0].split(' ').map(Number)
const originMap = input.slice(1).map(v => v.split(' ').map(Number));
let res = 0;
function recursive(cnt){
  if(cnt === 3) {
    spread(JSON.parse(JSON.stringify(originMap)))
    return;
  }
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if(originMap[i][j] !==0) {
        continue;
      }
  
      originMap[i][j] = 1;
      recursive(cnt+1);
      originMap[i][j] = 0;
    }
  }
}

function spread(map){
  let safeZone = 0;
  const q = []
  const visited = Array.from({length: n+1}, ()=> Array.from({length: m+1},()=> false))
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if(map[i][j] ===0) {
        safeZone++
      }
      if(map[i][j] ===2) {
        q.push([i,j])
      }
    }
  }
  const dx = [0,0,-1,1]
  const dy = [1,-1,0,0]
  while(q.length) {
    const [x,y] = q.shift();
    visited[x][y] = true;
    for(let i = 0; i<4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if(0<=nx && nx < n && 0 <= ny && ny < m) {
        if(map[nx][ny] === 0 && visited[nx][ny] === false) {
          map[nx][ny] = 2;
          safeZone--;
          visited[nx][ny] = true;
          q.push([nx,ny])
        }
      }
    }
  }

  res = Math.max(res, safeZone)
}
recursive(0)
console.log(res);
