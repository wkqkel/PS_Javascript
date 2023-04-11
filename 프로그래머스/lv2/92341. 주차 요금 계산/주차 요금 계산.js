function solution(fees, records) {
    // const [기본시간,기본요금,단위시간,단위요금]= fees // 시간단위(분), 요금단위(원)
    const 누적시간당주차요금계산 = 주차요금계산(fees) 
    const 차량별시간기록 = records.reduce((acc,cur,idx)=>{
        const [시각,차량번호,내역] = cur.split(' ');
        acc.set(차량번호, [...(acc.get(차량번호)||[]),시각]) ;
        return acc;
    }, new Map());
    
   const 누적주차요금 = [];
   const sorted차량별시간기록 = [...차량별시간기록].sort((a,b)=> a[0]-b[0])
   for (let [차량번호, 시간기록] of sorted차량별시간기록){
      
      const 해당차량누적주차시간 = 시간기록.reduce((acc,cur,idx,list)=> idx % 2 === 0 ? acc + 시간계산(cur, list[idx+1]): acc, 0)
       console.log(해당차량누적주차시간 ,누적시간당주차요금계산(해당차량누적주차시간))
      누적주차요금.push(누적시간당주차요금계산(해당차량누적주차시간))
   }
   return 누적주차요금
  // return [...차량별시간기록.values()].reduce((acc,cur,idx,list)=>{
  //     const 해당차량누적주차시간 = cur.reduce((acc,cur,idx,list)=> idx % 2 === 0 ? acc + 시간계산(cur, list[idx+1]): acc, 0)
  //     return acc + 누적시간당주차요금계산(해당차량누적주차시간)
  //   },0)
   

}

function 시간계산(입차시각, 출차시각='23:59'){
   const [입차시, 입차분] = 입차시각.split(':');
   const [출차시, 출차분] = 출차시각.split(':');

   return 출차분 - 입차분 < 0 
           ? (출차시 -1 - 입차시)* 60 + (+출차분 + 60 - 입차분) 
           : (출차시 - 입차시) * 60+ (출차분 - 입차분);
}

function 주차요금계산([기본시간,기본요금,단위시간,단위요금]){
  return function(누적주차시간){
    if(누적주차시간<=기본시간) return 기본요금
    return 기본요금 + Math.ceil((누적주차시간 - 기본시간) / 단위시간 ) * 단위요금
  }
}


   

// [180, 5000, 10, 600]