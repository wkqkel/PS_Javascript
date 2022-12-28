function solution(dots) {
    // 선분의 기울기가 같으면 평행하다
    // 기울기 (y2-y1) / (x2-x1)
    const [[x1,y1],[x2,y2],[x3,y3],[x4,y4]]=dots
    const m1 = (y2-y1) / (x2-x1)
    const m2 = (y3-y1) / (x3-x1)
    const m3 = (y4-y1) / (x4-x1)
    const m4 = (y3-y2) / (x3-x2)
    const m5 = (y4-y2) / (x4-x2)
    const m6 = (y4-y3) / (x4-x3)

    return +!(new Set([m1,m2,m3,m4,m5,m6]).size === 6) 
}