const returnPos = (x) => {
    const pos = [];
    pos[0] = keypad.findIndex(v=> v.includes(x));
    pos[1] = keypad[pos[0]].indexOf(x);
    return pos;
}

const getPosDiff = (pos1, pos2) => {
   return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
}

function solution(numbers, hand) {
    const MAP = {1:'L',4:'L',7:'L', 3:'R', 6:'R', 9:'R'};
    const handsPos = ['*', '#'];
    let res = '';
    for(let x of numbers){
        if(MAP[x]) {
           handsPos[+(MAP[x] === 'R')] = x;
           res += MAP[x];
        } else{
            // 2, 5, 8, 0
           const goalPos = returnPos(x);
           const leftPos = returnPos(handsPos[0]);
           const rightPos = returnPos(handsPos[1]);
           const leftDiff = getPosDiff(leftPos, goalPos);
           const rightDiff = getPosDiff(rightPos, goalPos);
           if(leftDiff === rightDiff) {
               handsPos[+(hand === 'right')] = x;
               res += hand === 'right' ? 'R' : "L";
           } else {
               handsPos[+(leftDiff > rightDiff)] = x;
               res += leftDiff > rightDiff ? 'R' : 'L';
           }
        }
    }
   return res;
}

const keypad = ['123', '456', '789', '*0#'];