function solution(d, budget) {
   // d.sort((a,b)=>a-b)
   // let sum = 0
   // for(let i=0; i<d.length; i++){
   //    sum += d[i]
   //    if(sum>budget) return i
   // }
   //  return d.length
    
    // let sum = 0
    // return d.sort((a,b)=>a-b).filter(item=>{
    //     sum+=item
    //     if(sum<=budget) return item
    // }).length
   return d.sort((a,b)=>a-b)
            .map((v,i)=> d.slice(0,i+1).reduce((acc,cur)=> acc+cur),0)
            .filter(v=> v<=budget).length
}