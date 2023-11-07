/** 
1. 아이디어
- 테스트케이스를 쪼갠다(사실 이게 젤 어려울듯_ 머릿속에 잘 안그려져서 돌려보면서...)
- 각 테스트케이스마다 
- landNum, visited 초기화
- 이중배열 돌면서, 1(땅) && 방문 X 이면 landNum++, dfs
- dfs에선 8방향 탐색하면서, 맵 이내 && 1 && 방문X이면 dfs
- console.log(landNum)

2. 시간복잡도
- DFS: O(V+E) = 5V = 9 * 50 * 50 = 22500
- 테스트케이스 만개이하면 괜찮.

3. 자료구조
- visited : bool[][];
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(v=>v.split(' ').map(Number));

const testcases = [];
let line = 0;
for (let i =0; i<input.length-1; i++) {
  if(i === line) {
    line = line + input[i][1] + 1;
    testcases.push([])
  }
  testcases[testcases.length-1].push(input[i])
}

const dx = [-1,1,0,0,-1,-1,1,1];
const dy = [0,0,1,-1,-1,1,-1,1];

for(let t = 0; t< testcases.length; t++) {
  const [m,n] = testcases[t][0];
  const map = testcases[t].slice(1);
  
  const visited = Array.from({length:n+1},()=>Array.from({length:m+1},()=> false));
  let landNum = 0;
 
  function dfs(x,y) {
    for(let i = 0; i< 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if(nx >= 0 && nx < n && ny >= 0 && ny < m){
        if(map[nx][ny] === 1 && visited[nx][ny] === false) {
          visited[nx][ny] = true;
          dfs(nx, ny)
        }
      }
    }
  }
  
  for(let i = 0; i<n; i++) {
    for(let j = 0 ; j<m; j++) {
      if(map[i][j] === 1 && visited[i][j] === false) {
        visited[i][j] = true;
        landNum++;
        dfs(i,j);
      }
    }
  }

  console.log(landNum)
}