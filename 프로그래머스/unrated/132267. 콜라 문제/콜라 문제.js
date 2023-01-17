function solution(a, b, n) {
    // a병을 갖다주면 b병 주는 마트. n병 갖다준다면 몇 병을 받나?
    // if(a < b) return 0;
    // let left = n;
    // let ans = 0
    // while(~~(left/a)) {
    //     let give = ~~(left / a) * a;
    //     let take = ~~(give / a) * b
    //     left = left - give + take;
    //     ans += take;
    // }
    // return ans;

    // Math.floor((n - b) / (a - b)) * b : n병 갖다주고 받은 병 갯수
    // Math.floor((n - b) / (a - b)) : a병을 몇 번 갖다줬는지
    // a-b : 한번에 갖다주면서 손해보는 양
    // n-b => a병을 몇 번 갖다줬는지인데 
    // 한 번 갖다줘도 b만큼 더해지기 때문에(a-b)
    // 초기값 b를 빼줘야 a번 갖다준 양이 나옴.
    return Math.floor((n - b) / (a - b)) * b
}