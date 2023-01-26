function solution(gems) {
    const set = new Set(gems)
    const map = new Map([[gems[0], 1]])
    let p1 = p2 = 0;
    let ans = [0, gems.length]
    
    while(p2 < gems.length){
        if(map.size === set.size && p2 - p1 < ans[1] - ans[0]) {
            ans = [p1+1,p2+1]
        }
        if(map.size < set.size){
            p2++
            map.set(gems[p2], ~~map.get(gems[p2]) + 1)
        } else {
            map.set(gems[p1], map.get(gems[p1]) - 1)
            if(!map.get(gems[p1])) map.delete(gems[p1])
            p1++
        }
    }
    return ans
}