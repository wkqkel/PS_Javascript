function solution(n){
    let pizza = 1;
    while (pizza * 6 % n) {
        pizza++;
    }
    return pizza;
}

// function getGCD(a, b){
//     // 최대공약수: 두 수를 나눴을 때 나머지가 0이면 작은 값 아니면 작은값과 나머지를 가지고 재귀.
//    return a%b ? getGCD(b, a%b) : b
// }

// function getLCM(a, b) {
    
//     // 최소공배수 :두 수를 곱한 값 / 최대공약수
//    return a * b  / getGCD(a,b) 
// }
// function solution(n) {
//     //  n과 6의 최소공배수 / 6
//     return  getLCM(6, n)  / 6 
// }