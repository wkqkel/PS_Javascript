// greatest common divisor 최대공약수, least common multiple 최소공배수

// function getGCD(num1, num2){
//      for(let i= Math.min(num1, num2); i>=0; i--){
//         if(num1%i===0&&num2%i===0) return i;
//      }
// }

// 재귀를 이용한 최대공약수
function getGCD(a, b){
    return (a%b)? getGCD(b, a%b) : b;
}

function solution(denum1, num1, denum2, num2) {
    const denum = denum1 * num2 + denum2 * num1;
    const num = num1 * num2;
    const gcd = getGCD(denum,num)
    return [denum/gcd, num/gcd]
}

// 1. 분수덧셈
// 2. 분자분모의 최대공약수로 나눠줌.