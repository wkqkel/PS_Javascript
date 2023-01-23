// 들어오는 숫자가 크다면 로그시간으로 풀어야함
// 로그시간 = 이진탐색

// 이진탐색은 특정 값을 찾는 알고리즘
// 우리는 특정값을 찾는 것이 아님
// 우리가 찾는 것은 최소 몇 분에 모든 심사가 끝나는가
// ㄴ 결정문제 = 이진 탐색 = 파라메트릭 서치 (Parametric Search)

// 최소 1분에서 10억분 * n 사이
// 면접관들이 몇 명을 처리하는가
// 처리 가능한 입국자가 n보다 작다면, 분을 올려야되고, 입국자가 n보다 크다면 분을 낮춰야해요.
// 면접관이 시간대비 몇 명을 처리할 수 있는가
// 시간 / 심사시간 = 심사관 당 처리 가능한 입국자수

function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        // mid시간에 한 사람당 맡을 수 있는 인원의 합
        const sum = times.reduce((acc, time)=> acc + Math.floor(mid / time),0);
        sum < n ? left = mid + 1 : right = mid - 1;
    }
    return left;
}