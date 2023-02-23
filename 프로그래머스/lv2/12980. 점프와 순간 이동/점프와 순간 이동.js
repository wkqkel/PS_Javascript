function solution(n) {
// 순간이동을 최대한 많이 해야한다. 
// 2로 나눈 값이 0이 아닐 경우 건전지를 1만 사용한다.
    // let ans = 0
    // while(n !== 0) {
    //     if(n % 2 === 0) {
    //         n /= 2;
    //     } else {
    //         n -= 1;
    //         ans++
    //     }
    // }
    // return ans
    
    // 어떠한 수를 2로 나누고, 그 몫을 또 2로 계속해서 나누면서 나오는 나머지들의 모든 합은
    // 어떠한 수를 이진수로 변환한 수의 1의 개수와 같다는 것을 이용하여 해결한 것
    return n.toString(2).replace(/[^1]/g,'').length;
}

// 목표가 5일때,
// 순간이동을 해서 가는 지점은 항상 x2이니 짝수이고, 
// 홀수 번째는 JUMP로 이동한다.
// 그렇다면 출발 지점에서 목표 지점으로 가는 길을 계산하면 고려해야할 요소 가 많으니 
// 목표 지점에서 출발 지점으로 역으로 계산 