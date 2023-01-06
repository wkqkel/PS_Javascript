function solution(k, score) {
    const arr = [];
    return score.map((v)=>{
            arr.push(v);
            arr.sort((a,b)=>a-b);
            if(arr.length > k) arr.shift()
            return arr[0];
    })
    
    
    // const ans = [];
    // const arr = [];
    // for(let i=0; i<score.length; i++){
    //     if(arr.length < k) {
    //         arr.push(score[i])
    //         arr.sort((a,b)=>b-a);
    //     } else {
    //       const idx =  arr.indexOf(arr.find(v=>v<score[i]))
    //       if(idx !== -1) {
    //           arr.splice(idx, 0 , score[i])
    //           arr.pop()
    //       }
    //     }
    //     ans.push(arr.at(-1))
    // }
    // return ans
}