function solution(sizes) {
    const sorted = sizes.map(([w,h]) => [w,h].sort((a,b)=> a-b))
    return Math.max(...sorted.map(([w])=>w)) * Math.max(...sorted.map(([_,h])=>h))
}