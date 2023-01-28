// 정규표현식 사용
function solution(dartResult) {
    const bonusMap = {'S': 1, 'D': 2, 'T': 3};
    const optionMap = {'#': -1, '*': 2 };
    
    const splitDartResult = dartResult.match(/\d+(S|D|T)(\*|#)?/g)
    const points = []
    
    for(let x of splitDartResult) {
        // 마지막 배열에 빈문자열 있는데 왜 그렇지...?
        const [point, bonus, option] = x.match(/\d+|S|D|T|\*|#?/g).slice(0,-1);
        if(option === '*') points[points.length - 1] *= 2;
        points.push(Math.pow(point, bonusMap[bonus]) * (optionMap[option] || 1));
    }
    return points.reduce((acc,cur)=> acc+cur,0)
}

// 다른사람풀이 1번째있는거 분석
function solution(dartResult) {
    // \d.?\D 숫자 + 아무 문자올수도 안+ 숫자아닌거
    // match는 매칭되는거 찾아서 첫번째 반환
    // g플래그로인해 여러개일 경우엔 배열로 반환
    let darts = dartResult.match(/\d.?\D/g);

    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
          options = { '*': 2, '#': -1, undefined: 1 };

    // (^\d{1,})(S|D|T)(\*|#)? 
    // [원본,숫자, S|D|T, (*|#)]  
    // *|#은 안올수도
    // \*는 *가  0번 이상 반복된 문자들과 매치 하는 메타문자로도 쓰여서 써줌.
    // 근데 왜 원본도 첫번째로 나오짐
    
    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];
        // '*' 일경우엔 앞에것도 - 해주는
        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];
        darts[i] = score;
    }
    return darts.reduce((acc,cur)=> acc+cur,0)
}

// 정규표현식 사용 X => 더 빠름
// function solution(dartResult) {
//    const bonus = ['_', 'S', 'D', 'T']
//    const points = []
//    let temp = ''
//    for(x of dartResult) {
//        // x가 숫자이면 temp에 더해줌
//       if(!isNaN(x)) temp += x
//        // x가 숫자가 아니면 이전 값 계산
//       if(bonus.includes(x)) {
//          points.push(Math.pow(+temp, bonus.indexOf(x)))
//          temp = ''
//       }
//       if(x=== '#') {
//           points[points.length -1] *= -1;
//       }
//       if(x=== '*') {
//           points[points.length -1] *= 2;
//           points[points.length -2] *= 2;
//       }
//    }
//    return points.reduce((acc,cur)=> acc+cur, 0)
// }

