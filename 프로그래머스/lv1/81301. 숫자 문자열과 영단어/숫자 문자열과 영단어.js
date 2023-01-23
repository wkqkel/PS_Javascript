function solution(s) {
    return +s.replace(new RegExp(MAP.join('|'), 'g'), (v)=> MAP.indexOf(v))
}
// const regex = /zero|one|two|three|four|five|six|seven|eight|nine/g
const MAP = ['zero', 'one', 'two','three','four',
             'five','six','seven','eight','nine']