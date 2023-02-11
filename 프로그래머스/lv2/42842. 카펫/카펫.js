const MAX_YELLOW = 2_000_000
function solution(brown, yellow) {
    for(let y=1; y<=MAX_YELLOW; y++) {
        const x = ((brown + 4) /2) -y
        if((y-2) * (x-2) === yellow) return [x, y]
    }
}
