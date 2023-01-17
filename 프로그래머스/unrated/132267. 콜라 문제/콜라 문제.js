function solution(a, b, n) {
    // a병을 갖다주면 b병 주는 마트. n병 갖다준다면 몇 병을 받나?
    if(a < b) return 0;
    let left = n;
    let ans = 0
    while(~~(left/a)) {
        let give = ~~(left / a) * a;
        let take = ~~(give / a) * b
        left = left - give + take;
        ans += take;
    }
    return ans;
}