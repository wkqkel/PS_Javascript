function solution(N, stages) {
    // const arr = Array(N).fill(1).map((v,i)=>v+i);
    //  return arr.map((n)=> {
    //      const failure = stages.filter(v=> v===n).length 
    //                      / stages.filter(v=>v>=n).length
    //      return [failure, n]
    //  }).sort((a,b)=> b[0]-a[0]).map(v=>v[1])
    
    const arr = []
    for(let i=1; i<=N; i++){
         const failure = stages.filter(v=> v===i).length 
                         / stages.filter(v=>v>=i).length
         arr.push([failure, i])
    }
    return arr.sort((a,b)=> b[0]-a[0]).map(v=>v[1])
}