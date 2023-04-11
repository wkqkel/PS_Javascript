function solution(fees, records) {
    const 누적시간당주차요금계산하기 = 주차요금계산하기(fees);
    
    const 차량별시간기록 = records.reduce((acc,cur,idx)=>{
        const [시각,차량번호,내역] = cur.split(' ');
        acc.set(차량번호, [...(acc.get(차량번호)||[]),시각]) ;
        return acc;
    }, new Map());
   const 내림차순차량번호별시간기록 = [...차량별시간기록].sort((a,b)=> a[0]-b[0]);
    
  const 누적주차요금 = 내림차순차량번호별시간기록.reduce((누적요금,[차량번호, 시간기록])=>{
       const 해당차량누적주차시간 = 시간기록.reduce((acc,cur,idx,list)=> {
                           if(idx % 2 !== 0) return acc
                           return acc + 시간계산하기(cur, list[idx+1])
                       }, 0);
       return [...누적요금, 누적시간당주차요금계산하기(해당차량누적주차시간)];
   }, []);
    
   return 누적주차요금
}

function 시간계산하기(입차시각, 출차시각='23:59'){
   const [입차시, 입차분] = 입차시각.split(':');
   const [출차시, 출차분] = 출차시각.split(':');

   return 출차분 - 입차분 < 0 
           ? (출차시 -1 - 입차시)* 60 + (+출차분 + 60 - 입차분) 
           : (출차시 - 입차시) * 60+ (출차분 - 입차분);
}

function 주차요금계산하기([기본시간,기본요금,단위시간,단위요금]){
  return function(누적주차시간){
    if(누적주차시간<=기본시간) return 기본요금;
    return 기본요금 + Math.ceil((누적주차시간 - 기본시간) / 단위시간 ) * 단위요금;
  }
}

// [180, 5000, 10, 600]