function solution(d, budget) {
   // d.sort((a,b)=>a-b)
   // let sum = 0
   // for(let i=0; i<d.length; i++){
   //    sum += d[i]
   //    if(sum>budget) return i
   // }
   //  return d.length

   return d.sort((a,b)=>a-b)
            .map((v,i)=> d.slice(0,i+1).reduce((acc,cur)=> acc+cur),0)
            .filter(v=> v<=budget).length
}