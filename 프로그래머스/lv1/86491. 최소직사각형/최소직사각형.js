function solution(sizes) {
//     const sorted = sizes.map(([w,h]) => [w,h].sort((a,b)=> a-b))
//     return Math.max(...sorted.map(v=>v[0])) * Math.max(...sorted.map(v=>v[1]))
    
   let maxWidth = 0;
   let maxHeight = 0;
   sizes.forEach(size => {
        let [w,h] = size.sort((a,b)=>b-a)
        if(w > maxWidth) maxWidth = w;
        if(h > maxHeight) maxHeight = h;
    })
   return maxWidth * maxHeight
}