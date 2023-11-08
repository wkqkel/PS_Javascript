/** 
1. 아이디어
- 그래프 만들기
- dfs 1로 시작
- parent를 넘겨주고
- 자식들을 for문 돌면서 방문체크하면서 
- 방문안했으면 해당 자식의 부모 기록 + dfs

-> dfs한번
2. 시간복잡도
- O(V+E) : 100_000 +?

3. 자료구조
- graph : int[][]
- visited: bool[][]
- res : int[]
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = +input[0]
const arr = input.slice(1).map(v=>v.split(' ').map(Number));

const graph = Array.from({length:n+1},()=>[]);
for(let i = 0; i < arr.length; i++){
  const [a,b] = arr[i]
  graph[a].push(b)
  graph[b].push(a)
}
const visited = Array.from({length:n+1},()=>false);
const res = []
function dfs(parent){
  const children = graph[parent];
  for(let i = 0; i < children.length; i++){
    const child = children[i];
    if(visited[child]) continue;
    res[child] = parent;
    visited[child] = true;
    dfs(child);
  }
}
dfs(1)

console.log(res.slice(2).join('\n'))