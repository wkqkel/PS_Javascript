function isCorrect(s) {
    const stack = []
    for(let j=0; j<s.length; j++) {
        const x = s[j]
        if(['{', "[", '('].includes(x)) {
            stack.push(x)
            continue;
        } 
        const pop = stack.pop()
        if(pop !== MAP[x]) {
           return false
        } 
        if(j===s.length-1) {
           return stack.length === 0
        }
    }
}

function solution(s) {
    const ans = []
    for(let i=0; i< s.length; i++) {
        s = i === 0 ? s: s.substring(1) + s[0]
        ans[i] = isCorrect(s)
    }
    return ans.filter(Boolean).length
}

const MAP = {
    '}':'{', 
    ')':'(', 
    ']':'['
}