function getMeasureNumber(n){
    let cnt = 0;
    // point : i*i
    for (let i = 1; i * i <= n; i++) {
        if(i * i === n) cnt++;
        else if (n % i === 0) cnt +=2;
    }
    return cnt;
}

function solution(number, limit, power) {
    
    let ans = 0
    for(let i=1; i<=number; i++){
     const measureNumber = getMeasureNumber(i)
     ans += measureNumber > limit ? power : measureNumber
    }
    return ans
}

// function getMeasureNumber(n){
//    return new Array(n).fill(1).map((v,i)=> v+i).filter(v=> n%v===0).length
// }

// function solution(number, limit, power) {
//     return Array(number).fill(1).map((v,i) => v+i)
//         .reduce((acc,cur)=> {
//         const measureNumber = getMeasureNumber(cur)
//         return measureNumber > limit ? acc + power : acc + measureNumber }, 0)
// }