let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v=>v.split(' '));

let testCaseNumber = input[0];
let testInfoLine = 1;

function dfs(graph,y,x,n,m){
  if(y>=n || x>=m || y<0 || x < 0) return false;

  if(graph[y][x]) {
    graph[y][x] = 0;
    dfs(graph, y+1, x, n, m)
    dfs(graph, y-1, x, n, m)
    dfs(graph, y, x+1, n, m)
    dfs(graph, y, x-1, n, m)
    return true;
  }
  
  return false
}

while(testCaseNumber--) {
  const [m,n,k] = input[testInfoLine].map(Number);
  
  const graph = new Array(n).fill([]).map(v=> Array(m).fill(0));
  
  for(let i = 1; i<=k; i++) {
    const [x,y] = input[testInfoLine + i].map(Number);
    graph[y][x] = 1;
  }
  
  let answer = 0;
  
  for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
      if(dfs(graph,i,j,n,m)) answer++
    }
  }
  
  testInfoLine += k + 1
  console.log(answer);
}