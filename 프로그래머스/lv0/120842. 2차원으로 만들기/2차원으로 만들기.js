function solution(num_list, n) {
    let ans =[]
    while(num_list.length >0){
      ans.push(num_list.splice(0,n))
    }
    return ans
}