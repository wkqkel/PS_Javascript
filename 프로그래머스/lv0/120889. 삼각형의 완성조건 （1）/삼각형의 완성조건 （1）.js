function solution(sides) {
    sides.sort((a,b)=> b-a)
    return sides[0] < sides[1] + sides[2] ? 1 : 2
    // return +(sides[0] >= sides[1] + sides[2]) + 1
    // if(sides[0] < sides[1] + sides[2]) return 1
    // return 2
}