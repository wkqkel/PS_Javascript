
function solution(id_list, report, k) {
    const map = {}
    for (let x of report) {
       const [user, reported] = x.split(' ');
       map[reported] = [...new Set([...(map[reported] || []), user])]
    }
    const filtered = Object.values(map).filter(v=> v.length >= k).flat()
    const res = {}
    filtered.forEach(v => res[v] = (res[v] || 0) + 1)
    return id_list.map(v => res[v] | 0)
    
    // 테스트 3, 11 , 21 시간초과
}