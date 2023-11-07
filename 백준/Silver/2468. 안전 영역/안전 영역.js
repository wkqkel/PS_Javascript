/** 
1. 아이디어
- 잠기는 높이를 1-MAX까지 반복문을 돈다(100)
- safeArea = 0 초기화
- 2중배열을 돌면서 방문X이면서 높이보다 크면(초과) dfs실행
- dfs에서는 4방향 돌면서 맵 범위 안 && 높이보다 크면 dfs
- res와 safeArea 비교 후 큰 값 갱신
2. 시간복잡도
- min-max : 100
- dfs : O(V+E)
- V : 100 * 100
- E : 4V
- V+E = 50000
- 100 * O(V+E) = 5000000 < 2억이하로 1초 이내 가능
3. 자료구조
- visited : int[][]
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = +input[0];
const map = input.slice(1).map(v=>v.split(' ').map(Number));

const flatMap = map.flat();
const min = Math.min(...flatMap);
const max = Math.max(...flatMap);

const dx = [0,0,1,-1];
const dy = [1,-1,0,0];

let res = 0;

for(let k= min; k <= max; k++) {
  let safeArea = 0;
  const visited = Array.from({length: n},()=>Array.from({length: n},()=>false))

  function dfs(x,y,k) {
    for(let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if(0<=nx && nx<n && 0<=ny && ny<n) {
        if(map[nx][ny] >= k && visited[nx][ny] === false) {
          visited[nx][ny] = true;
          dfs(nx,ny,k);
        }
      }
    }
  }

  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      if(map[i][j] >= k && visited[i][j] === false) {
        safeArea++
        visited[i][j] = true;
        dfs(i,j,k);
      }
    }
  }
  
  res = Math.max(res, safeArea)
}

console.log(res)
