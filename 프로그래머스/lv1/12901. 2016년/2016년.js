function solution(a, b) {
    // mdn Date 객체 => getDay() 참고
    return MAP[new Date(`2016-${a}-${b}`).getDay()]
}
const MAP = ['SUN','MON','TUE','WED','THU','FRI','SAT']