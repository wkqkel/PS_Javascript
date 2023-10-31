function solution(n, computers) {
    var answer = 0;
    
    const graph = new Array(n).fill([])
    for(let i = 0; i<n; i++){
      for(let j = i+1; j<n; j++){
         if(computers[i][j]===1) {
             // graph[i] = [...(graph[i]), j]
             graph[i] = [...graph[i],j]
             graph[j] = [...graph[j],i]
         }   
      }
    }
    const ch = [];
    for(let i = 0; i < graph.length; i++) {
        if(!ch[i]){
            answer++;
            ch[i] = true;
            const queue = [...graph[i]];
            while(queue.length){
                const v = queue.shift();
                if(!ch[v]) {
                    ch[v] = true;
                    queue.push(...graph[v]);
                }
            }
        }
    }
    return answer;
}
