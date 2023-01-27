function solution(N, stages) {
    const arr = Array(N).fill(1).map((v,i)=>v+i);

     return arr.map((n)=> [stages.filter(v=> v===n).length / stages.filter(v=>v>=n).length ,n]).sort((a,b)=> b[0]-a[0]).map(v=>v[1])
}