function solution(n){
    let ans = 0;
    for(let i=1; i<=n; i++){
        if(n % i === 0 && i % 2 === 1) ans++
    }
    return ans;
}

// 다른 사람 풀이
// (주어진 n의) 홀수인 약수의 개수를 구하면 된다
// 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수는 주어진 수의 홀수 약수의 개수와 같다라는 정수론 정리
// https://velog.io/@injoon2019/알고리즘-프로그래머스-숫자의-표현 // 참고
// 12로 예를 들면 
// 12의 약수는 1,2,3,4,6,12로 이루어지는데
// 1로 인해 1*12로, 12라는 하나의 자연수로 만들어질 수 있음.
// 2로 인해 2*6 = 6+6으로 이루어졌는데, 이렇듯 짝수의 경우는 n + (n+1)은 무조건 홀수이기때문에, 불가능_ 이후 짝수는 생략
// 3으로 인해 3*4로, 3+3+3+3으로 이루어졌는데, 이를 좀 변형하면 1+2+3+4가 되서 연속되는 숫자로 만들 수 있음.
// 따라서 1,3으로 2개

// 나의 풀이
// function solution(n) {
//     if([1,2].includes(n)) return 1; 
    
//     const arr = Array(~~(n/2)+1).fill(1).map((v,i)=> v + i)
//     let count = left = right = 0;
//     while(right !== arr.length) {
//        const sum = arr.slice(left, right+1).reduce((acc,cur)=> acc + +cur,0);
       
//        if(sum === n) count++
//        if(sum <= n) right++
//        if(sum > n) left++
//     }

//     return count + 1; // n이 1이나 2일땐 +1해주면 안됨. early return으로 예외처리
// }

// 15보다 클때까지 뒤에 더해
// 중간에 같으면 count++ 
// 15넘어가면 작을때까지 빼
// 중간에 같으면 
// 15보다 작아지면, 다시 뒤에꺼더해
// 그리고 right가 끝에 다달고 left가 
 
// 절반까지만 하면됨.