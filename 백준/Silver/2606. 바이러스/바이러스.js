let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v=>v.split(' '));

/** 
/* Array(+input[0]+1 ).fill([]); // --1
/* Array.from({ length:+input[0]+1 }, () => []));
/* fill은 동일한 배열(객체)에 대한 참조가 모든 인덱스에 할당되어, 
/* 한 배열을 수정하면 모든 인덱스의 배열이 변경됨.
/* from은 콜백함수를 이용해, 각 인덱스에 대해 새로운 배열을 생성하여 독립성을 보장
*/
const graph = input.slice(2).sort((a,b)=> a[0] - b[0]).reduce((acc,cur)=>{
  acc[+cur[0]].push(+cur[1]);
  acc[+cur[1]].push(+cur[0]);
  return acc;
},  Array.from({ length:+input[0]+1 }, () => []));

const visited = Array(+input[0]+1).fill(false);

function dfs(graph,v,visited){
    visited[v] = true;
  for(i of graph[v]) {
    if(!visited[i]) {
      dfs(graph, i, visited)
    }
  }
}

dfs(graph, 1, visited);

console.log(visited.filter(Boolean).length - 1);