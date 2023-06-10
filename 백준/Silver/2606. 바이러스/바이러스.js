let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const n = +input[0]
let graph = Array(n+1).fill().map(v=>[]);

for (let i= 2; i<2+ +input[1]; i++) {
  const [a,b] = input[i].split(' ').map(Number);
  graph[a] = [...graph[a] ,b];
  graph[b] = [...graph[b] ,a];
}
const visited = Array(n+1).fill(false)
function dfs(n,graph,visited){
  if(!visited[n]) {
    visited[n] = true;
    for(let x of graph[n]){
      dfs(x,graph,visited);
    }    
  }
}

dfs(1,graph,visited)
console.log(visited.filter(Boolean).length- 1)
