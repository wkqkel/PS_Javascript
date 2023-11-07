/** 
1. 아이디어
- 2중for문돌면서, 방문X이면 dfs
- dfs에서는 res+1 네방향탐색
- 방문 X, 같은 색이면 방문처리

- 비색약, 색약

2. 시간복잡도
- V+E = V+4V = 5V = 5N^2 = 50000 
- 3배해도 15만 < 2억 >> 가능
3. 자료구조
- visited: bool[][]
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

  
const n = +input[0]
const map = input.slice(1).map(v=>v.split(''));

const dx = [0,0,-1,1]
const dy = [1,-1,0,0]

function initializeVisited(n){
  return Array.from({length:n+1},()=>Array.from({length:n+1},()=> false))
}

function solution(n, map) {
  let res1 = res2 = 0;

  let visited = initializeVisited(n)

  function dfs(x,y){
      for(let i = 0; i< 4;i++){
        const nx = x + dx[i];
        const ny = y + dy[i];

        if(0<=nx && nx<n && 0<=ny && ny<n) {
          if(map[x][y]===map[nx][ny] && !visited[nx][ny]){
            visited[nx][ny] = true;
            dfs(nx,ny);
          }
        }
      }
  }

  for(let i =0; i<n;i++){
    for(let j = 0; j<n;j++){
      if(!visited[i][j]) {
        res1++;
        visited[i][j] = true;
        dfs(i,j);
      }
    }
  }

  for(let i =0; i<n;i++){
    for(let j = 0; j<n;j++){
      if(map[i][j] === 'R') {
        map[i][j] = 'G';
      }
    }
  }

  visited = initializeVisited(n)
  
  for(let i =0; i<n;i++){
    for(let j = 0; j<n;j++){
      if(!visited[i][j]) {
        res2++;
        visited[i][j] = true;
        dfs(i,j);
      }
    }
  }

  return res1 + ' ' + res2
}

console.log(solution(n,map));