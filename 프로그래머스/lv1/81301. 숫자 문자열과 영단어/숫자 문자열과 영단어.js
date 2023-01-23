function solution(s) {
    return +s.replace(regex, (v)=> MAP.indexOf(v))
   
}
const regex = /zero|one|two|three|four|five|six|seven|eight|nine/g
const MAP = ['zero', 'one', 'two','three','four',
             'five','six','seven','eight','nine']