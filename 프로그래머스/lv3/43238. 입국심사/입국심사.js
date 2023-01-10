function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const sum = times.reduce((acc, time)=> acc + Math.floor(mid / time),0);
        sum < n ? left = mid + 1 : right = mid - 1;
    }
    return left;
}