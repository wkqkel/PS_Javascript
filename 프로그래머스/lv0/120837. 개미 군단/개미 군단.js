function solution(hp) {
    return ~~(hp / 5) + ~~((hp % 5) / 3) + hp % 5 % 3
    // return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + hp % 5 % 3
}