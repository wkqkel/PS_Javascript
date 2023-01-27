// 1. 가장 단순 O(n)
// function isPrime(n){
//     for(let i=2; i<n;i++){
//         if(n % i===0) return false;
//     }
//     return true;
// }
// 2.그 어떤 소수도 N의 제곱근보다 큰 수로 나눠지지 않는다는 점을 이용_ O(sqrt(n))
// function isPrime(n){
//     for(let i=2; i*i<=n;i++){
//         if(n % i===0) return false
//     }
//     return true
// }

// 3. 에라토스테네스체
// 2부터 n까지의 자신을 제외한 배수를 제거하다 보면 소수만 남는다는 원리를 이용
// 이때 √n까지만 판별을 해도 결과는 똑깥음 => i*i
// n까지의 소수를 찾을때 사용할 수 있음.
function getPrimes(n) {
    const primes = [false, false, ...Array(n-1).fill(true)];
    for(let i = 2; i*i<=n; i++){
        if(primes[i]) {
            for(let j = i * 2; j <= n; j+=i){
                primes[j] = false
            }
        }
    }
    return primes
}

function solution(n) {
    return getPrimes(n).filter(Boolean).length
}

