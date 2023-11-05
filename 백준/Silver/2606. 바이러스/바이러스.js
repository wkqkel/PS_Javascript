/** 
1. 아이디어
- 그래프 만들고
- 큐에 1번을 넣고
- 1번 방문 처리
- while에서 
  - 큐빼내면서
  - 빼낸 것과 연결된 컴퓨터(노드)들 배열을 for문 돌면서
  - 방문하지않았으면 방문처리 + 큐에 넣음
- visited에서 filter true의 갯수
2. 시간복잡도
- BFS: O(V+E)
- V: 최대 100
- E: 100 * 100
- 10100 < 2억이하 >> 가능

3. 자료구조
- graph: int[][]
- visited: int[]
- queue: int[]
*/

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [V,E] = input.slice(0,2).map(Number)

let graph = Array.from({length:V+1}, ()=> Array.from({length:0}));

for(let i = 2; i<input.length; i++){
  const [a,b] = input[i].split(' ').map(Number)
  graph[a] = [...graph[a], b]
  graph[b] = [...graph[b], a]
}

let visited = Array.from({length:V+1}, ()=> false)
let q = [1]
visited[1] =true;
let res = 0;

while(q.length) {
  const v = q.shift();
  const arr = graph[v];
  for(let i = 0; i<arr.length;i++) {
    if(!visited[arr[i]]) {
      res++
      visited[arr[i]] = true;
      q.push(arr[i])
    }
  }
}

console.log(res)
// 1번과 연결된 것이니 1번빼고
// console.log(visited.filter(Boolean).length - 1)

