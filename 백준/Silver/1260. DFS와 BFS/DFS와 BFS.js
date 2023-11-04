/**
1. 아이디어
- graph 만들기
- DFS
  - cur 넘기면서 (초기값 v)
  - res.push(cur)
  - graph[cur] for문 돌려서 방문안했으면 dfs
- BFS
  - 큐만들고 (초기값 v)
  - while(q.length)
  - cur = 큐맨앞 빼내면서, 
  - res.push(cur)
  - graph[cur] for문 돌리고 
  - 중복아니면, 큐에 push

2. 시간복잡도
  - DFS,BFS : O(V+E)
  - 11000 < 2억이하 >> 가능
  

3. 자료구조
  - 그래프: int[][]
  - 방문체크: bool[][]
  - 결과: int[]
  
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [n,m,v] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(v=> v.split(' ').map(Number));

let graph = Array.from({length: n+1},()=>[]);
for(let i = 0; i<arr.length; i++){
  const [a,b] = arr[i];
  graph[a] = [...graph[a],b];
  graph[b] = [...graph[b],a];
}
graph = graph.map(v=>v.sort((a,b)=>a-b))
// 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문

function solution1(v) {
  const res = []
  const visited = Array.from({length: n+1},()=>false);
  function dfs(cur) {
    visited[cur] = true;
    res.push(cur);
    const arr = graph[cur]
    for(let i = 0; i<arr.length; i++){
      if(!visited[arr[i]]){
        visited[arr[i]] = true;
        dfs(arr[i]);
      }
    }
  }
  dfs(v);
  return res.join(' ')
}

function solution2(v) {
  const res = []
  const visited = Array.from({length: n+1},()=>false);
  const q = [v]
  visited[v] = true;

  while(q.length) {
    const cur = q.shift();
    res.push(cur)
    const arr = graph[cur];
    for(let i =0; i< arr.length; i++) {
      if(!visited[arr[i]]) {
        visited[arr[i]] = true;
        q.push(arr[i])
      }
    }
  }
  
  return res.join(' ')
}

console.log(solution1(v))
console.log(solution2(v))