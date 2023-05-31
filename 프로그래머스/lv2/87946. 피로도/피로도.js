function solution(k, dungeons) {
  let answer = -1;
  const visited = new Array(dungeons.length).fill(false);
 
  function dfs(fatigue, dungeons, count) {
      answer = Math.max(answer, count);
      
      for(let i = 0; i<dungeons.length; i++){
          if(visited[i] == false && dungeons[i][0] <= fatigue) {
              visited[i] = true;
              dfs(fatigue - dungeons[i][1], dungeons, count+1);
              visited[i] = false;
          }
      }
  }
  
  dfs(k, dungeons, 0)
    
  return answer;
}