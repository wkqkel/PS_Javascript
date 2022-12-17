function solution(num_list) {
    let ans = [0,0]
    // num_list.forEach(num => {
    //     ans[num%2] += 1
    // })
    for(let num of num_list){
        ans[num%2] += 1
    }
    return ans
}