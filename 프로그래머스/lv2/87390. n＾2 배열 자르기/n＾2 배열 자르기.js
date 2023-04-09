function solution(n, left, right) {
    // const arr = Array(n*n).fill(0).map((v,i)=>{
    //     // 현재 n개중에서 몇번째 인덱스 <= 현재 n바퀴수
    //    const curIdx = (v + i) % (n)
    //    const 현재바퀴수 =  Math.floor(i /n) + 1
    //    return curIdx < 현재바퀴수 ? 현재바퀴수 : curIdx + 1
    // })
    
    // return arr.slice(left,right+1)
 

    return  Array(right -left + 1).fill(0).map((v,i)=>{
         let curIdx = (v + i +left) % (n)
         let 현재바퀴수 =  Math.floor((left+i) /n) + 1
         return curIdx < 현재바퀴수 ? 현재바퀴수 : curIdx + 1
    })
   
}